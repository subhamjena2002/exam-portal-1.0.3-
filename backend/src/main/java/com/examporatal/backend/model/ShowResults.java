package com.examporatal.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Document(collection = "result")
@Getter
@Setter
@ToString
public class ShowResults {
    @Id
    private String id;
    @Indexed(unique = true)
    private String email;
    private Number correctAns;
    private Number incorrectAns;
    private String topic;
}
