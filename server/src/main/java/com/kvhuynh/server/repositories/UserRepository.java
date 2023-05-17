package com.kvhuynh.server.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.kvhuynh.server.models.User;

// public interface UserRepository extends CrudRepository<User, Long> {
// 	Optional<User> findByEmail(String email);

// }

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByEmail(String email);
}