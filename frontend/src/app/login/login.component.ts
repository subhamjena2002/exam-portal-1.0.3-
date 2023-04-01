import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  userObject = {} as User;
  responseobj = {} as any;
  constructor(private userService: UserService, private router: Router) {

  }
  ngOnInit(): void {
  
  }
  onUserSubmit(userForm: any) {
    const user = this.filterFormData(userForm.value);
    this.userService.loginUser(user).subscribe(data => {  
     this.responseobj=data;
     debugger
    if(this.responseobj.code === '200' && this.responseobj.status === 'success'){
     // alert(this.responseobj.message);
      this.router.navigate(["/user"]);
    }else
    {
      alert("you are not authorized user");
    }
      
    });
  }

  filterFormData(formValue: User) {
    let data: keyof User;
    for (data in formValue) {
      if (data !== 'id') {
        formValue[data] = formValue[data].trim().toLowerCase();
      }
    }
    
    return formValue;
  }

/*   onCompare(id: string) {
    this.userService.getUser(id).subscribe(data => {
      this.userObject = data;

      
    })
  } */
}
