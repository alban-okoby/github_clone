package com.digitalsouag.dto;

import com.digitalsouag.model.User;
import lombok.Data;
import net.minidev.json.annotate.JsonIgnore;


@Data
public class GRepositoryDTO {
    private Long id;
    private String repositoryName;
    private String repositoryDescription;
    private boolean visibility;
    private UserDTO user;
}
