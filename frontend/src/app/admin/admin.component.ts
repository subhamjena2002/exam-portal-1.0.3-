import { Component, OnInit } from '@angular/core';
import { Question } from '../model/Question';
import { QuestionService } from '../service/question.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  allQuestion: Question[] = [];
  isModalOpen = false;
  isUploadModalOpen = false;
  questionObject = {} as Question;
  file!: File;
  

  constructor(private questionService: QuestionService, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.getAllQuestion();
  }

  getAllQuestion() {
    this.questionService.getAllQuestion().subscribe(data => {
      this.allQuestion = data;
    });
  }

  onQuestionSubmit(questionForm: any) {
    const question = this.filterFormData(questionForm.value);

    this.questionService.addQuestion(question).subscribe(data => {
      questionForm.reset();
      alert('Question added')
      this.getAllQuestion();
    });
  }

  filterFormData(formValue: Question) {
    let data: keyof Question;
    for (data in formValue) {
      if (data !== 'id') {
        formValue[data] = formValue[data].trim().toLowerCase();
      }
    }
    
    return formValue;
  }

  onUpdate(id: string) {
    this.questionService.getQuestion(id).subscribe(data => {
      this.questionObject = data;
      this.isModalOpen = true;
    })
  }

  onAddQuestion() {
    this.isModalOpen = true;
    this.questionObject = {} as Question;
  }
  onUploadQuestion() {
    this.isUploadModalOpen = true;
  }

  onDelete(id: string) {
    if (confirm('Do you want to remove')) {
      this.questionService.deleteQuestion(id).subscribe(data => {
        this.getAllQuestion();
        alert("Question deleted")
      })
    }
  }

  uploadFile() {
    this.isUploadModalOpen = false;
    
    
    const formData: FormData = new FormData();

    formData.append('file', this.file, this.file.name);

   this.questionService.uploadFile(formData).subscribe(data => {
    console.log('Uploaded successfully');
   });

  }

  selectFile(event: any) {
    this.file = event.target.files.item(0);

  }

  cancelUpload() {
    this.isUploadModalOpen = false;
  }
  
  
  
}
