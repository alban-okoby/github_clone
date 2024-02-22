package com.digitalsouag.service;

import com.digitalsouag.dto.GRepositoryDTO;
import com.digitalsouag.model.GRepository;

import java.util.List;
import java.util.Optional;

public interface GRepositoryService {
    List<GRepositoryDTO> getAllRepositories();

    GRepositoryDTO getRepositoryById(Long id);

    /**
     * Get repository by username and Repository name
     * @param username
     * @param repositoryName
     * @return repository
     */
    GRepositoryDTO getRepositoryByUsernameAndRepositoryName(String username, String repositoryName);

    /**
     * Get repository by username
     * @param username
     * @return repository
     */
    List<GRepositoryDTO> getRepositoriesByUsername(String username);

    /**
     * Create a new repository with 2 params
     * @param repositoryDTO
     * @param userId
     * @return repository
     */
    GRepositoryDTO createRepository(GRepositoryDTO repositoryDTO, Long userId);

    /**
     * Create a new repository width 1 param
     * @param repositoryDTO
     * @return repository
     */
    GRepositoryDTO createRepository(GRepositoryDTO repositoryDTO);

    /**
     * Update a repository
     * @param id
     * @param repositoryDTO
     * @return repository updated
     */
    GRepositoryDTO updateRepository(Long id, GRepositoryDTO repositoryDTO);

    /**
     * searchRepository : search repository by name or description
     * @param term
     * @return List of repositories finded
     */
    List<GRepositoryDTO> searchRepository(String term);

    /**
     * delete repository
     * @param id
     */
    void deleteRepository(Long id);
}
