import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent  implements OnInit {
  opened=true;
  constructor( private router: Router) {}
  ngOnInit(): void {}

  public logout() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userEmailId");
    this.router.navigate(["/login"]);
  }
}

