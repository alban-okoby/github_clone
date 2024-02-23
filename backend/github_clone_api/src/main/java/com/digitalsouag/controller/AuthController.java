package com.digitalsouag.controller;

import static dev.samstevens.totp.util.Utils.getDataUriForImage;

import java.util.UUID;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

import com.digitalsouag.model.VerificationToken;
import com.digitalsouag.repo.VerificationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import com.digitalsouag.config.AppConstants;
import com.digitalsouag.config.CurrentUser;
import com.digitalsouag.dto.ApiResponse;
import com.digitalsouag.dto.JwtAuthenticationResponse;
import com.digitalsouag.dto.LocalUser;
import com.digitalsouag.dto.LoginRequest;
import com.digitalsouag.dto.SignUpRequest;
import com.digitalsouag.dto.SignUpResponse;
import com.digitalsouag.exception.UserAlreadyExistAuthenticationException;
import com.digitalsouag.model.User;
import com.digitalsouag.security.jwt.TokenProvider;
import com.digitalsouag.service.MailService;
import com.digitalsouag.service.UserService;
import com.digitalsouag.util.GeneralUtils;

import dev.samstevens.totp.code.CodeVerifier;
import dev.samstevens.totp.exceptions.QrGenerationException;
import dev.samstevens.totp.qr.QrData;
import dev.samstevens.totp.qr.QrDataFactory;
import dev.samstevens.totp.qr.QrGenerator;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserService userService;

	@Autowired
	TokenProvider tokenProvider;

	@Autowired
	private VerificationTokenRepository verificationTokenRepository;

	@Autowired
	private QrDataFactory qrDataFactory;

	@Autowired
	private QrGenerator qrGenerator;

	@Autowired
	private CodeVerifier verifier;

	@Autowired
	MailService mailService;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		LocalUser localUser = (LocalUser) authentication.getPrincipal();
		boolean authenticated = !localUser.getUser().isUsing2FA();
		String jwt = tokenProvider.createToken(localUser, authenticated);
		return ResponseEntity.ok(new JwtAuthenticationResponse(jwt, authenticated, authenticated ? GeneralUtils.buildUserInfo(localUser) : null));
	}

	@GetMapping("/findUserByEmail")
	public ResponseEntity<?> findUserByEmail(@RequestBody String email) {
		User user = userService.findTheUserByEmail(email);
		if (user == null) {
			return new ResponseEntity("USER NOT FOUND", HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity(user, HttpStatus.OK);

	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
		try {
			User user = userService.registerNewUser(signUpRequest);
			final String token = UUID.randomUUID().toString();
			userService.createVerificationTokenForUser(user, token);
			mailService.sendVerificationToken(token, user);
			if (signUpRequest.isUsing2FA()) {
				QrData data = qrDataFactory.newBuilder().label(user.getEmail()).secret(user.getSecret()).issuer("John").build();
				String qrCodeImage = getDataUriForImage(qrGenerator.generate(data), qrGenerator.getImageMimeType());
				return ResponseEntity.ok().body(new SignUpResponse(true, qrCodeImage));
			}
		} catch (UserAlreadyExistAuthenticationException e) {
			log.error("Exception Ocurred", e);
			return new ResponseEntity<>(new ApiResponse(false, "Email Address already in use!"), HttpStatus.BAD_REQUEST);
		}
		catch (QrGenerationException e) {
			log.error("QR Generation Exception Ocurred", e);
			return new ResponseEntity<>(new ApiResponse(false, "Unable to generate QR code!"), HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok().body(new ApiResponse(true, "User registered successfully"));
	}

	@PostMapping("/verify")
	@PreAuthorize("hasRole('PRE_VERIFICATION_USER')")
	public ResponseEntity<?> verifyCode(@NotEmpty @RequestBody String code, @CurrentUser LocalUser user) {
		if (!verifier.isValidCode(user.getUser().getSecret(), code)) {
			return new ResponseEntity<>(new ApiResponse(false, "Invalid Code!"), HttpStatus.BAD_REQUEST);
		}
		String jwt = tokenProvider.createToken(user, true);
		return ResponseEntity.ok(new JwtAuthenticationResponse(jwt, true, GeneralUtils.buildUserInfo(user)));
	}

	@GetMapping("/token/verify")
	public ResponseEntity<?> confirmRegistration(@NotEmpty @RequestParam String token) {
		VerificationToken tokenValue = this.verificationTokenRepository.findByToken(token);

		if (tokenValue != null) {
			userService.validateVerificationToken(token);
			String buttonUrl =String.format("<a href=\"localhost:4200/auth/signin\" class=\"confirmation-button\">");
			return ResponseEntity.ok().body("Your GC (Github Clone) Account is activated successfully ✅." + buttonUrl);
		}
		else {
			return ResponseEntity.ok().body("Error ❌, this link are expired or doesn't exist.");
		}
	}

	// user activation - verification
	@PostMapping("/token/resend")
	@ResponseBody
	public ResponseEntity<?> resendRegistrationToken(@NotEmpty @RequestBody String expiredToken) {
		if (!userService.resendVerificationToken(expiredToken)) {
			return new ResponseEntity<>(new ApiResponse(false, "Token not found!"), HttpStatus.BAD_REQUEST);
		}
		return ResponseEntity.ok().body(new ApiResponse(true, AppConstants.SUCCESS));
	}
}