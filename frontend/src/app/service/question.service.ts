import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../model/Question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl = 'http://localhost:1200/api/question';

  constructor(private httpClient: HttpClient) { }

  addQuestion(question: any) {
    return this.httpClient.post(this.baseUrl, question);
  }

  getAllQuestion() {
    return this.httpClient.get<Question[]>(this.baseUrl);
  }
  getAllQuestionByTopic(topic:string){
    return this.httpClient.get<Question[]>(this.baseUrl+`/topic/${topic}`);
  }
  getQuestion(id: string): Observable<Question> {
    return this.httpClient.get<Question>(this.baseUrl + `/${id}`);
  }

  deleteQuestion(id: string) {
    return this.httpClient.delete(this.baseUrl + `/${id}`);
  }
}
