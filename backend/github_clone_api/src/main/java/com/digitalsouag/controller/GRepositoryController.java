package com.digitalsouag.controller;

import com.digitalsouag.config.AppConstants;
import com.digitalsouag.dto.GRepositoryDTO;
import com.digitalsouag.service.GRepositoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/{username}/{repositoryName}")
    public GRepositoryDTO getRepositoriesByUsernameAndRepositoryName(@PathVariable String username,
                                                                     @PathVariable String repositoryName) {
        return repositoryService.getRepositoryByUsernameAndRepositoryName(username, repositoryName);
    }

    @GetMapping("/{username}")
    public ResponseEntity<List<GRepositoryDTO>> getRepositoriesByUsername(@PathVariable("username") String username) {
        List<GRepositoryDTO> repoList = this.repositoryService.getRepositoriesByUsername(username);
        return new ResponseEntity(repoList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<GRepositoryDTO> createRepo(@RequestBody GRepositoryDTO repositoryDTO) {
        repositoryService.createRepository(repositoryDTO);
        return new ResponseEntity(repositoryDTO, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public GRepositoryDTO updateRepository(@PathVariable Long id, @RequestBody GRepositoryDTO repositoryDTO) {
        return repositoryService.updateRepository(id, repositoryDTO);
    }

    @GetMapping("/search")
    public ResponseEntity<List<GRepositoryDTO>> searchRepositories(@RequestParam("q") String q) {
        List<GRepositoryDTO> findedReposList = this.repositoryService.searchRepository(q);
        return new ResponseEntity(findedReposList, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteRepository(@PathVariable Long id) {
        repositoryService.deleteRepository(id);
    }

}
