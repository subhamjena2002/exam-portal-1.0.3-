import { Component } from '@angular/core';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent {

  startTopic(topic:string){
    localStorage.setItem('topic',topic);
  }

}
