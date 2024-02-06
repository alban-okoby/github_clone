package com.digitalsouag.service.mail;

import com.digitalsouag.model.User;

public interface MailService {

	void sendVerificationToken(String token, User user);
}
