package com.digitalsouag.service.impl;

import com.digitalsouag.dto.GRepositoryDTO;
import com.digitalsouag.dto.UserDTO;
import com.digitalsouag.dto.UserInfo;
import com.digitalsouag.model.GRepository;
import com.digitalsouag.model.User;
import com.digitalsouag.repo.GRepositoryRepo;
import com.digitalsouag.repo.UserRepository;
import com.digitalsouag.service.GRepositoryService;
import com.digitalsouag.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GRepositoryServiceImpl implements GRepositoryService {

    @Autowired
    private GRepositoryRepo gRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    public GRepositoryServiceImpl(UserService userService) {
        this.userService = userService;
    }

    @Override
    public List<GRepositoryDTO> getAllRepositories() {
        return gRepo.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    @Override
    public GRepositoryDTO getRepositoryById(Long id) {
        return gRepo.findById(id)
                .map(this::convertToDTO)
                .orElse(null);
    }

    @Override
    public GRepositoryDTO getRepositoryByUsernameAndRepositoryName(String username, String repositoryName) {
        return gRepo.findByUserUsernameAndRepositoryName(username, repositoryName)
                .map(this::convertToDTO)
                .orElse(null);
    }

    @Override
    public List<GRepositoryDTO> getRepositoriesByUsername(String username) {
        return gRepo.findGRepositoriesByUsername(username)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public GRepositoryDTO createRepository(GRepositoryDTO repositoryDTO, Long userId) {
        User user = userService.findUserById(userId).get();
        UserDTO userInfo = userToDTO(user);
        repositoryDTO.setUser_id(userId);
        GRepository entity = convertToEntity(repositoryDTO);
        return convertToDTO(gRepo.save(entity));
    }

    @Override
    public GRepositoryDTO createRepository(GRepositoryDTO repositoryDTO) {
        User user = userRepository.findById(repositoryDTO.getUser_id()).get();
        UserDTO userInfo = userToDTO(user);
        repositoryDTO.setUser_id(userInfo.getId());
        GRepository entity = convertToEntity(repositoryDTO);
        return convertToDTO(gRepo.save(entity));
    }

    @Override
    public GRepositoryDTO updateRepository(Long id, GRepositoryDTO repositoryDTO) {
        GRepository existingRepo = gRepo.findById(id).orElse(null);
        if (existingRepo != null) {
            existingRepo.setRepositoryName(repositoryDTO.getRepositoryName());
            existingRepo.setRepositoryDescription(repositoryDTO.getRepositoryDescription());
            existingRepo.setVisibility(repositoryDTO.isVisibility());
            return convertToDTO(gRepo.save(existingRepo));
        }
        return null;
    }

    @Override
    public void deleteRepository(Long id) {
        gRepo.deleteById(id);
    }

    private UserDTO userToDTO(User user) {
        UserDTO userInfo = new UserDTO();
        userInfo.setDisplayName(user.getDisplayName());
        userInfo.setEmail(user.getEmail());
        userInfo.setRoles(user.getRoles());
        userInfo.setUsername(user.getUsername());
        return modelMapper.map(user, UserDTO.class);
    }
    private User dtoToUser(UserDTO userDTO) {
        return modelMapper.map(userDTO, User.class);
    }
    private GRepositoryDTO convertToDTO(GRepository entity) {
        return modelMapper.map(entity, GRepositoryDTO.class);
    }

    private GRepository convertToEntity(GRepositoryDTO dto) {
        return modelMapper.map(dto, GRepository.class);
    }
}
