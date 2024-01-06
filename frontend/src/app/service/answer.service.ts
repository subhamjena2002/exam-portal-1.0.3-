import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  baseUrl = 'http://localhost:1200/api/showResults';

  constructor(private httpClient: HttpClient) { }

  saveResult(result: any) {
    return this.httpClient.post(this.baseUrl, result);
  }

  showResult(emailId: any, topic: any):Observable<any> {
    return this.httpClient.get(this.baseUrl+"?emailId="+emailId+"&topic="+topic);
  }

  
}
