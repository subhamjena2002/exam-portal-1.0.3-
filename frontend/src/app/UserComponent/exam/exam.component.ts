import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../model/Question';
import { QuestionService } from '../../service/question.service';

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


  correctAns = 0;
  incorrectAns = 0;
  constructor(private questionService: QuestionService, private router: Router) {

  }


  ngOnInit(): void {
    this.getAllQuestionByTopic();
    // this.showAnswer();
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

  }


}

