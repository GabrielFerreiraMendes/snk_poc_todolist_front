import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../model/user/task/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/todolist/api/v1/tasks';
  }

  public findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.usersUrl);
  }

  public find(task: Task): Observable<Task>{
    return this.http.get<Task>(`${this.usersUrl}/find/${task.id}`);
  }

  public save(task: Task): Observable<Task>{
    return this.http.post<Task>(`${this.usersUrl}/add`, task);
  }

  public updateTaskStatus(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.usersUrl}/update/${task.id}`, task);
  }

  public findByUserId(id: Number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.usersUrl}/find/user/${id}`);
  }

  public delete(task: Task): Observable<void> {
    return this.http.delete<void>(`${this.usersUrl}/delete/${task.id}`);
  }
}
