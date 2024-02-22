package com.digitalsouag.service;

import com.digitalsouag.dto.GRepositoryDTO;
import com.digitalsouag.model.GRepository;

import java.util.List;
import java.util.Optional;

public interface GRepositoryService {
    List<GRepositoryDTO> getAllRepositories();
    GRepositoryDTO getRepositoryById(Long id);
    GRepositoryDTO getRepositoryByUsernameAndRepositoryName(String username, String repositoryName);
    List<GRepositoryDTO> getRepositoriesByUsername(String username);
    GRepositoryDTO createRepository(GRepositoryDTO repositoryDTO, Long userId);
    GRepositoryDTO createRepository(GRepositoryDTO repositoryDTO);
    GRepositoryDTO updateRepository(Long id, GRepositoryDTO repositoryDTO);
    void deleteRepository(Long id);
}
