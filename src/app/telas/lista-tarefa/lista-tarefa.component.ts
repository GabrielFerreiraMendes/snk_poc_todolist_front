import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task/task-service.service';
import { Task } from '../../model/user/task/task';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-tarefa',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './lista-tarefa.component.html',
  styleUrl: './lista-tarefa.component.css'
})

export class ListaTarefaComponent implements OnInit {
  data$ = new Observable<Task[]>();
  userId: any = null;

  constructor(private taskService: TaskService) { };

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.data$ = this.taskService.findAll();
  }

  updateTaskStatus(task: Task) {
    this.taskService.updateTaskStatus(task).subscribe({
      next: (res: any) => {
        this.findTasksByUserId(this.userId);
      },
      error: (err) => { }
    });
  }

  findTasksByUserId(id: number) {
    if (id == null) {
      this.fetchData();
    } else {
      this.data$ = this.taskService.findByUserId(id);
    }
  }

  deleteTask(Task: Task) {
    return this.taskService.delete(Task).subscribe({
      next: (res: any) => {
        this.findTasksByUserId(this.userId);
      },
      error: (err) => { }
    });
  }

}
