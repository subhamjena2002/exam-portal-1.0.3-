import { Component, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../model/Question';
import { QuestionService } from '../../service/question.service';
import { AnswerService } from 'src/app/service/answer.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  allQuestion: Question[] = [];
  questionObject = {} as Question;
  isCollapsed: boolean = true;
  answerData: any = [];
  topic: string = '';


  correctAns = 0;
  incorrectAns = 0;
  constructor(private questionService: QuestionService, private router: Router, private ansService: AnswerService) {

  }

  elem = document.documentElement; 

  ngOnInit(): void {
     this.getAllQuestionByTopic();
    this.elem.requestFullscreen(); 
    // this.showAnswer();
  }
  HandleOnFocus(){
    this.router.navigateByUrl('/user');
  }

  getAllQuestionByTopic() {
    const topic=localStorage.getItem('topic');
    if(topic!==null){
    this.questionService.getAllQuestionByTopic(topic).subscribe(data => {
      this.allQuestion = data;
    });
  }else{
    alert("Topic not defined");
  }
  }

  showAnswer(i: any) {
    console.error(i, "HHHHH");
    this.isCollapsed = !this.isCollapsed;

  }
  addAnswer(qId: string, ans: string) {
    if (this.answerData.length > 0) {
      this.answerData = this.answerData.filter((data: any) => !data.hasOwnProperty(qId));
      this.answerData.push({ [qId]: ans });
    } else {
      this.answerData.push({ [qId]: ans });
    }
  }

  submitAnswer() {

    this.allQuestion.filter((q: Question, index: number) => {
      this.topic = q.topic;
      this.answerData.forEach((ans: any) => {
        if (ans.hasOwnProperty(q.id) && ans[q.id] === q.answer) {
          this.correctAns++;
        } else if (ans.hasOwnProperty(q.id) && ans[q.id] != q.answer) {
          this.incorrectAns++;
          console.log(ans[q.id], q.answer);

        }
      });
    });

      /* this.answerClass.getAnswer(this.correctAns, this.incorrectAns); */
      this.router.navigate(["/result", this.correctAns, this.incorrectAns]);

    let resultData:any = {};
    resultData.email = sessionStorage.getItem("userEmailId");
    resultData.correctAns = this.correctAns;
    resultData.incorrectAns = this.incorrectAns;
    resultData.topic = this.topic;
    this.ansService.saveResult(resultData).subscribe(data => {
      console.log("Answer saved successfully");
    });

    console.log(resultData);
  

  }
  @HostListener('document:visibilitychange', ['$event'])
appVisibility() {
   if (document.hidden) {
      //do whatever you want
      sessionStorage.setItem("isLoggedIn", "false");
      this.router.navigate(['/login']);
      
    } 
}


}

