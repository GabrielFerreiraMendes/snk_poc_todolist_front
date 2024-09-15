import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../model/user/user';
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

  public save(userName: String): Observable<User> {
    return this.http.post<User>(`${this.usersUrl}/add`, {"name": userName});
  }

  public delete(user: User): Observable<User> {
    return this.http.delete<User>(`${this.usersUrl}/delete/${user.id}`);
  }

  public find(user: User): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/find/${user.id}`);
  }
}
