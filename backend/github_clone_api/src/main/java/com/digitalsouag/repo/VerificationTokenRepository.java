package com.digitalsouag.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitalsouag.model.User;
import com.digitalsouag.model.VerificationToken;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

	VerificationToken findByToken(String token);

	VerificationToken findByUser(User user);
}
