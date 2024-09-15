import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../model/task/task';
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

  public updateTaskStatus(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.usersUrl}/update/${task.id}`, task);
  }
}
