package com.digitalsouag.repo;

import com.digitalsouag.model.GRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GRepositoryRepo extends JpaRepository<GRepository, Long>, JpaSpecificationExecutor<GRepository> {
    List<GRepository> findByRepositoryName(String s);
    @Query("SELECT r FROM GRepository r WHERE r.user.displayName = :username AND r.repositoryName = :repositoryName")
    Optional<GRepository> findByUserUsernameAndRepositoryName(@Param("username") String username, @Param("repositoryName") String repositoryName);

    @Query("SELECT r FROM GRepository r WHERE r.user.username = :username")
    List<GRepository> findGRepositoriesByUsername(@Param("username") String username);
}
