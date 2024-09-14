import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/todolist/api/v1/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(userName: String) {
    return this.http.post<User>(`${this.usersUrl}/add`, {"name": userName});
  }

  public delete(userId: number) {
    return this.http.delete(`${this.usersUrl}/delete/${userId}`);
  }
}
