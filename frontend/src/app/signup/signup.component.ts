import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  userObject = {} as User;
  allUser: User[] = [];
  user:any;
  constructor(private userService: UserService) {
  
  }

  ngOnInit(): void { 
  }
  onUserSubmit(userForm: any) {
    const user = this.filterFormData(userForm.value);
    this.userService.addUser(user).subscribe(data => {
      userForm.reset();
      alert('User added')     
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
}
