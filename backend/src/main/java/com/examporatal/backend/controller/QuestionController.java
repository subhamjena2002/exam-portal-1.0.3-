package com.examporatal.backend.controller;

import java.util.ArrayList;
import java.util.List;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
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


    @PostMapping("/uploadFile")
    public ResponseEntity<String> uploadExcelFile(@RequestParam("file") MultipartFile file) {
        try {
            Workbook workbook = WorkbookFactory.create(file.getInputStream());
            Sheet sheet = workbook.getSheetAt(0); // Assuming the Excel file has only one sheet
            List<Question> questions = new ArrayList<>();
            // Process the sheet data
            for (Row row : sheet) {
        
                Question question = new Question();
                question.setQuestion(row.getCell(0).getStringCellValue());
                question.setOption1(row.getCell(1).getStringCellValue());
                question.setOption2(row.getCell(2).getStringCellValue());
                question.setOption3(row.getCell(3).getStringCellValue());
                question.setOption4(row.getCell(4).getStringCellValue());
                question.setAnswer(row.getCell(5).getStringCellValue());
                question.setTopic(row.getCell(6).getStringCellValue());
                questions.add(question);
            }

            workbook.close();
            
            questionService.addAllQuestion(questions);
            return new ResponseEntity<>("File uploaded successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to upload file: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
