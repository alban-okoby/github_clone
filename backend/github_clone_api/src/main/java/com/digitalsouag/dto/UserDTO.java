package com.digitalsouag.dto;

import com.digitalsouag.model.Role;
import lombok.Data;

import java.util.Set;

@Data
public class UserDTO {
    private Long id;
    private String displayName, email, username;
    private Set<Role> roles;
}
