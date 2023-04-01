import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  opened=true;
  constructor( private router: Router) {}
  ngOnInit(): void {}
  /**
   * name
   */
  public logout() {
    this.router.navigate(["/welcome"]);
  

  }
}
