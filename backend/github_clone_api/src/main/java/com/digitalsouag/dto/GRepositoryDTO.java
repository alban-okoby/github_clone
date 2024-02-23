package com.digitalsouag.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class GRepositoryDTO {
    private Long id;
    private String repositoryName;
    private String repositoryDescription;
    private boolean visibility;
    private Date createdAt;
    private Date updatedAt;
//    private List<Tag> tags;
//    @JsonIgnore
    private Long user_id;
    private UserDTO user;
}
