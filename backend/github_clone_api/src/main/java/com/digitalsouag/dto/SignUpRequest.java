package com.digitalsouag.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.digitalsouag.validator.PasswordMatches;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@PasswordMatches
@AllArgsConstructor
@NoArgsConstructor
public class SignUpRequest {

	private Long userID;

	private String providerUserId;

	@NotEmpty
	private String displayName;

	@NotEmpty
	private String email;
	
	private String username;

	private SocialProvider socialProvider;

	@Size(min = 6, message = "{Size.userDto.password}")
	private String password;

	@NotEmpty
	private String matchingPassword;

	private boolean using2FA;

	public SignUpRequest(String providerUserId, String displayName, String email, String password, String matchingPassword, SocialProvider socialProvider) {
		this.providerUserId = providerUserId;
		this.displayName = displayName;
		this.email = email;
		this.password = password;
		this.matchingPassword = matchingPassword;
		this.socialProvider = socialProvider;
	}
	public SignUpRequest(String displayName, String email, String username, String password, String matchingPassword) {
		this.displayName = displayName;
		this.email = email;
		this.username = username;
		this.password = password;
		this.matchingPassword = matchingPassword;
	}

	public SignUpRequest(String providerUserID, String displayName, String email, String username, String password, String matchingPassword, SocialProvider socialProvider) {
	}

	public static Builder getBuilder() {
		return new Builder();
	}

	public static class Builder {
		private String providerUserID;
		private String displayName;
		private String username;
		private String email;
		private String password;
		private String matchingPassword;
		private SocialProvider socialProvider;

		public Builder addProviderUserID(final String userID) {
			this.providerUserID = userID;
			return this;
		}

		public Builder addDisplayName(final String displayName) {
			this.displayName = displayName;
			return this;
		}

		public Builder addEmail(final String email) {
			this.email = email;
			return this;
		}

		public Builder addPassword(final String password) {
			this.password = password;
			return this;
		}

		public Builder addMatchingPassword(final String matchingPassword) {
			this.matchingPassword = matchingPassword;
			return this;
		}

		public Builder addSocialProvider(final SocialProvider socialProvider) {
			this.socialProvider = socialProvider;
			return this;
		}

		public SignUpRequest build() {
			return new SignUpRequest(providerUserID, displayName, email, username, password, matchingPassword, socialProvider);
		}

	}
}
