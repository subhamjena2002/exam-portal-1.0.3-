import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  opened=true;
  constructor( private router: Router) {}
  ngOnInit(): void {}

  public logout() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userEmailId");
    this.router.navigate(["/login"]);
  }
  startTopic(topic:string){
    sessionStorage.setItem('topic',topic);
  }
  

}
