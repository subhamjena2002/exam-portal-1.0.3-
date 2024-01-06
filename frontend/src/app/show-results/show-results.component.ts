import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../service/answer.service';
import { User } from '../model/User';
import { Result } from '../model/Result';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  public userlist={} as User;
  public resultlist :Result[] = [];
  public MarkSecured :any[] = [] ;
  public Temp: number=10;
  
  constructor(private answerService: AnswerService){
      
  }

  ngOnInit():void{
    let emailId = sessionStorage.getItem("userEmailId");
      let topic = sessionStorage.getItem('topic');
      
      this.answerService.showResult(emailId, topic).subscribe(data => {
        this.userlist=data.user;
        this.resultlist=data.result;
     /*    this.resultlist.forEach((obj)  => {
          this.MarkSecured.push(obj.correctAns * this.Temp);
        }); */

        console.log(data);
      })
  }
}
