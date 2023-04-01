import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:1200/api/user';

  constructor(private httpClient: HttpClient) { }

  addUser(user: any) {
    return this.httpClient.post(this.baseUrl, user);
  }
  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + `/${id}`);
  }
  loginUser(user: User) {
    return this.httpClient.post(this.baseUrl+'/login',user);
  }
}
