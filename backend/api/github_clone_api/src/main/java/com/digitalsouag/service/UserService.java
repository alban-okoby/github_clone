package com.digitalsouag.service;

import java.util.Map;
import java.util.Optional;

import com.digitalsouag.exception.UserAlreadyExistAuthenticationException;
import com.digitalsouag.dto.LocalUser;
import com.digitalsouag.dto.SignUpRequest;
import com.digitalsouag.model.User;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.OidcUserInfo;

public interface UserService {

	User registerNewUser(SignUpRequest signUpRequest) throws UserAlreadyExistAuthenticationException;

	User findUserByEmail(String email);

	User findUserByToken(String token);

	Optional<User> findUserById(Long id);

	LocalUser processUserRegistration(String registrationId, Map<String, Object> attributes, OidcIdToken idToken, OidcUserInfo userInfo);

	void createVerificationTokenForUser(User user, String token);

	boolean resendVerificationToken(String token);

	String validateVerificationToken(String token);
}
