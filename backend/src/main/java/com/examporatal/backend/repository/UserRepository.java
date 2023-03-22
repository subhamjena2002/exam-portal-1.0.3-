package com.examporatal.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.examporatal.backend.model.User;

public interface UserRepository extends MongoRepository<User, String>{
    User findByEmail(String email);
}
