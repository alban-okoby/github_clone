package com.digitalsouag.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "REPOSITORY")
public class GRepository {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "repo_id")
    private Long id;
    private String repositoryName;
    private String repositoryDescription;
    private boolean visibility;

    @ManyToOne()
    @JoinColumn(nullable = false, name = "user_id")
    private User user;
}
