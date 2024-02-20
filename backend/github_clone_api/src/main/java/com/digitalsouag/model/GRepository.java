package com.digitalsouag.model;

import lombok.Data;

import javax.persistence.*;

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

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;
}
