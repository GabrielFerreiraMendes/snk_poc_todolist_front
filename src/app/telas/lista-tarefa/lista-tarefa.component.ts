import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task/task-service.service';
import { Task } from '../../model/task/task';

@Component({
  selector: 'app-lista-tarefa',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './lista-tarefa.component.html',
  styleUrl: './lista-tarefa.component.css'
})
export class ListaTarefaComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any = [];

  constructor(private taskService: TaskService) {};

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.taskService.findAll().subscribe({
      next: (res: any) => { this.data = res; },
      error: (err) => { }
    });
  }

  updateTaskStatus(task: Task) {
    this.taskService.updateTaskStatus(task).subscribe({
      next: (res: any) => { this.fetchData();},
      error: (err) => { }
    });
  }

}
