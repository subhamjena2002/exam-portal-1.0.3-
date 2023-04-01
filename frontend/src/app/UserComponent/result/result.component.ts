import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  incorrect = 0;
  correct = 0;
  total = 0;

  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAnswer();
  }

  getAnswer() {
    this.activeRouter.params.subscribe(param => {
      this.correct = param['correct'];
      this.incorrect = param['incorrect'];
      this.total = this.correct * 10;
    })
  }

}




