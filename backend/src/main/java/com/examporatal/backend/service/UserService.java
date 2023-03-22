package com.examporatal.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.examporatal.backend.UserResponse.UserResponse;
import com.examporatal.backend.model.User;
import com.examporatal.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public void addUser(User user) {
        userRepository.save(user);
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public UserResponse loginUser(User user) {
        UserResponse ur=new UserResponse();
        System.err.println(user);
       User u=this.userRepository.findByEmail(user.getEmail());
       if(u!=null){
        if(u.getEmail().equals(user.getEmail()) && u.getPassword().equals(user.getPassword())){
            ur.setCode("200");
            ur.setStatus("success");
            ur.setMessage("You are authorized user");
        }

        }else{
        ur.setCode("400");
        ur.setStatus("Faild");
        ur.setMessage("You are unauthrozed user");
       }

        return ur;
    }

}
