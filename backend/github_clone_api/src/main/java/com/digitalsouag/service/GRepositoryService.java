package com.digitalsouag.service;

import com.digitalsouag.dto.GRepositoryDTO;
import com.digitalsouag.model.GRepository;

import java.util.List;

public interface GRepositoryService {
    List<GRepositoryDTO> getAllRepositories();
    GRepositoryDTO getRepositoryById(Long id);
    GRepositoryDTO getRepositoryByUsernameAndRepositoryName(String username, String repositoryName);
    GRepositoryDTO createRepository(GRepositoryDTO repositoryDTO, Long userId);
    GRepositoryDTO updateRepository(Long id, GRepositoryDTO repositoryDTO);
    void deleteRepository(Long id);
}
