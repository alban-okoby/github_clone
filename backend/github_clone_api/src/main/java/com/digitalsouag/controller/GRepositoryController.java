package com.digitalsouag.controller;

import com.digitalsouag.config.AppConstants;
import com.digitalsouag.dto.GRepositoryDTO;
import com.digitalsouag.service.GRepositoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(AppConstants.API_ROOT +  "/repository")
public class GRepositoryController {
    @Autowired
    private GRepositoryService repositoryService;

    @GetMapping
    public List<GRepositoryDTO> getAllRepositories() {
        return repositoryService.getAllRepositories();
    }

    @GetMapping("/{id}")
    public GRepositoryDTO getRepositoryById(@PathVariable Long id) {
        return repositoryService.getRepositoryById(id);
    }

    @GetMapping("/{username}/{repositoryName}")
    public GRepositoryDTO getRepositoryByUsernameAndRepositoryName(@PathVariable String username, @PathVariable String repositoryName) {
        return repositoryService.getRepositoryByUsernameAndRepositoryName(username, repositoryName);
    }

    @PostMapping("/{userId}")
    public GRepositoryDTO createRepository(@RequestBody GRepositoryDTO repositoryDTO, @PathVariable Long userId) {
        return repositoryService.createRepository(repositoryDTO, userId);
    }

    @PutMapping("/{id}")
    public GRepositoryDTO updateRepository(@PathVariable Long id, @RequestBody GRepositoryDTO repositoryDTO) {
        return repositoryService.updateRepository(id, repositoryDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteRepository(@PathVariable Long id) {
        repositoryService.deleteRepository(id);
    }
}
