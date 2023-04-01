import { Component } from '@angular/core';

@Component({
  selector: 'app-gk',
  templateUrl: './gk.component.html',
  styleUrls: ['./gk.component.css']
})
export class GkComponent {
  startTopic(topic:string){
    localStorage.setItem('topic',topic);
  }
}
