package com.examporatal.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examporatal.backend.UserResponse.UserResponse;
import com.examporatal.backend.model.User;
import com.examporatal.backend.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    @PostMapping
    public void add(@RequestBody User user) {
        userService.addUser(user);
    }

    @GetMapping
    public List<User> findAllQuestion() {
        return userService.getAllUser();
    }
    
    @PostMapping("/login")
    public ResponseEntity<UserResponse> loginUser(@RequestBody User user){
        UserResponse ur=this.userService.loginUser(user);
        return new ResponseEntity<>(ur,HttpStatus.OK);
    }
}
