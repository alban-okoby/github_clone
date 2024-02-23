package com.digitalsouag.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "REPOSITORY")
public class GRepository {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "REPO_ID")
    private Long id;
    private String repositoryName;
    private String repositoryDescription;
    private boolean visibility;
    private Date createdAt;
    private Date updatedAt;
//    private List<String> tags;
    private Long user_id;

    @ManyToOne
    @JoinColumn(name = "USER_ID", insertable = false, updatable = false)
    private User user;
}
