package com.digitalsouag.controller;

import com.digitalsouag.model.User;
import com.digitalsouag.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digitalsouag.config.CurrentUser;
import com.digitalsouag.dto.LocalUser;
import com.digitalsouag.util.GeneralUtils;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

	private UserService userService;
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("/me")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<?> getCurrentUser(@CurrentUser LocalUser user) {
		return ResponseEntity.ok(GeneralUtils.buildUserInfo(user));
	}

	@GetMapping("/all")
	public ResponseEntity<?> getContent() {
		return ResponseEntity.ok("Public content goes here");
	}

	@GetMapping("/user")
	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<?> getUserContent() {
		return ResponseEntity.ok("User content goes here");
	}

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> getAdminContent() {
		return ResponseEntity.ok("Admin content goes here");
	}

	@GetMapping("/mod")
	@PreAuthorize("hasRole('MODERATOR')")
	public ResponseEntity<?> getModeratorContent() {
		return ResponseEntity.ok("Moderator content goes here");
	}

	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserById(@PathVariable("userId") Long userId) {
		User findedUser = this.userService.findUserById(userId).get();
		if (findedUser != null)
			return new ResponseEntity(findedUser, HttpStatus.OK);
		return new ResponseEntity("user not found !", HttpStatus.OK);
	}
}