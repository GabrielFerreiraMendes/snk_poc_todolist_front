import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  taskId: number = 0;
  userId: number = 0;
  status: String = "";

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get('http://localhost:8081/todolist/api/v1/tasks').subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }

  updateTaskStatus(taskId: number) {
    this.httpClient.put(`http://localhost:8081/todolist/api/v1/tasks/update/${taskId}`, { status: this.status }).subscribe((data: any) => {
      console.log(data);
      this.fetchData();
    });
  }

}
