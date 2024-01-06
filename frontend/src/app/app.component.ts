import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router)  {}

/* @HostListener('document:visibilitychange', ['$event'])
appVisibility() {
   if (document.hidden) {
      //do whatever you want
      sessionStorage.setItem("isLoggedIn", "false");
      this.router.navigate(['/login']);
      
    } 
} */

  title = 'frontend';
  opeaned=true
}
