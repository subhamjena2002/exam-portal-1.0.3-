package com.examporatal.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.examporatal.backend.model.Question;
import com.examporatal.backend.repository.QuestionRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;

    public void addQuestion(Question question) {
        questionRepository.save(question);
    }

    public List<Question> getAllQuestionByTopic(String topic) {
        if(topic!=null && !topic.isEmpty()){
        return questionRepository.findByTopic(topic);
        }else{
            return new ArrayList<>();
        }
    }

    public List<Question> getAllQuestion() {
       
        return questionRepository.findAll();
    }

    public Question getQuestion(String id) {
        return questionRepository.findById(id).orElseThrow();
    }

    public void deleteQuestion(String id) {
        questionRepository.deleteById(id);
    }
}
