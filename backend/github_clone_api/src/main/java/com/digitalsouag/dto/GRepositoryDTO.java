package com.digitalsouag.dto;

import lombok.Data;

@Data
public class GRepositoryDTO {
    private Long id;
    private String repositoryName;
    private String repositoryDescription;
    private boolean visibility;
    private UserDTO user;
}
