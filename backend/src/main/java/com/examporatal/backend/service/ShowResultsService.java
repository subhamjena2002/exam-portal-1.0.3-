package com.examporatal.backend.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.examporatal.backend.model.ShowResults;
import com.examporatal.backend.model.User;
import com.examporatal.backend.repository.ShowResultsRepository;
import com.examporatal.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ShowResultsService {
    private final ShowResultsRepository showResultsRepository;
    private final UserRepository userRepository;
    
    public void addShowResult(ShowResults showResults) {
        showResultsRepository.save(showResults);
    }

    public Map<String,Object> getDetails(String emailId, String topic) {
        User user = userRepository.findByEmail(emailId);
       List<ShowResults> result = showResultsRepository.findByEmailAndTopic(emailId, topic);

        Map<String, Object> resultData = new HashMap<>();
        resultData.put("user", user);
        resultData.put("result", result);

        return resultData;

    }
}
