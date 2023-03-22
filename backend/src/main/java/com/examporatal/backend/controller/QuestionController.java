package com.examporatal.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examporatal.backend.model.Question;
import com.examporatal.backend.service.QuestionService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping("/api/question")
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;

    @PostMapping
    public void add(@RequestBody Question question) {
        questionService.addQuestion(question);
    }

    @GetMapping
    public List<Question> findAllQuestion() {
        return questionService.getAllQuestion();
    }

    @GetMapping("/topic/{topic}")
    public List<Question> findAllQuestionByTopic(@PathVariable("topic")String topic) {
        return questionService.getAllQuestionByTopic(topic);
    }

    @GetMapping("{id}")
    public Question getQuestion(@PathVariable String id) {
        return questionService.getQuestion(id);
    }

    @DeleteMapping("{id}")
    public void deleteQuestion(@PathVariable String id) {
        questionService.deleteQuestion(id);
    }

}
