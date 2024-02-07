package com.digitalsouag.service;

import com.digitalsouag.model.User;

public interface MailService {

	void sendVerificationToken(String token, User user);
}
