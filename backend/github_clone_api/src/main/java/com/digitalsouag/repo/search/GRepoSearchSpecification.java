package com.digitalsouag.repo.search;

import com.digitalsouag.model.GRepository;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

public class GRepoSearchSpecification {
    public static Specification<GRepository> search(String key) {
        return (Root<GRepository> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> {
            String pattern  = "%" + key + "%";
            return builder.or(
                    builder.like(root.get("repositoryName"), pattern)
            );
        };

    }
}
