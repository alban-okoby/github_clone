package com.digitalsouag.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.digitalsouag.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	User findUserByEmail(String email);

	@Query("SELECT u FROM User u WHERE u.username = :username")
	User findUserByUsername(@Param("username")String username);

	User findByEmail(String email);

	boolean existsByEmail(String email);

}
