package com.examporatal.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.examporatal.backend.model.ShowResults;

public interface ShowResultsRepository extends MongoRepository<ShowResults, String>{
    List<ShowResults> findByEmailAndTopic(String email, String topic);
}
