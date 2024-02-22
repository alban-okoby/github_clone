package com.digitalsouag.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

@Data
public class GRepositoryDTO {
    private Long id;
    private String repositoryName;
    private String repositoryDescription;
    private boolean visibility;
    @JsonIgnore
    private Long user_id;
    private UserDTO user;
}
