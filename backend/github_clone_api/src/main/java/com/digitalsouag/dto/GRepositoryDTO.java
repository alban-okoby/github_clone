package com.digitalsouag.dto;

import com.digitalsouag.model.User;
import lombok.Data;


@Data
public class GRepositoryDTO {
    private Long id;
    private String repositoryName;
    private String repositoryDescription;
    private boolean visibility;
    private User user;
}
