package com.digitalsouag.dto;

import com.digitalsouag.model.Role;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
public class UserDTO {
    private String id, displayName, email, username;
    private Set<Role> roles;
}
