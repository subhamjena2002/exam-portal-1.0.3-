package com.examporatal.backend.UserResponse;

import com.examporatal.backend.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private String code;
    private String status;
    private String message;
    private User user;
}
