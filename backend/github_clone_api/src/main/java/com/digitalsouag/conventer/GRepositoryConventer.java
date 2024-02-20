package com.digitalsouag.conventer;

import com.digitalsouag.dto.GRepositoryDTO;
import org.springframework.stereotype.Component;
import org.modelmapper.ModelMapper;

@Component
public class GRepositoryConventer {
    private final ModelMapper modelMapper;

    public GRepositoryConventer(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public GRepositoryDTO toDTO(GRepositoryConventer gRepo) {
        return this.modelMapper.map(gRepo, GRepositoryDTO.class);
    }
    public GRepositoryConventer toEntity(GRepositoryDTO gRepositoryDTO) {
        return this.modelMapper.map(gRepositoryDTO, GRepositoryConventer.class);
    }
}
