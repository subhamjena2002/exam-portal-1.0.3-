package com.examporatal.backend.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.examporatal.backend.model.Question;
import com.examporatal.backend.model.ShowResults;
import com.examporatal.backend.model.User;
import com.examporatal.backend.repository.ShowResultsRepository;
import com.examporatal.backend.service.QuestionService;
import com.examporatal.backend.service.ShowResultsService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping("/api/showResults")
@RequiredArgsConstructor

public class ShowResultsController {
     private final ShowResultsService showResultsService;
   @PostMapping
    public void add(@RequestBody ShowResults showResults) {
        showResultsService.addShowResult(showResults);
    }
    
    @GetMapping
    public Map<String, Object> getResult(@RequestParam("emailId") String emailId, @RequestParam("topic") String topic) {
            return showResultsService.getDetails(emailId, topic);
    }
}
