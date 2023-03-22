package com.examporatal.backend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.examporatal.backend.model.Question;

public interface QuestionRepository extends MongoRepository<Question, String> {
    List<Question> findByTopic(String topic);


}
