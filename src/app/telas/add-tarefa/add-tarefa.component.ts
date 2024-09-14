import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-tarefa',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './add-tarefa.component.html',
  styleUrl: './add-tarefa.component.css'
})
export class AddTarefaComponent {
  httpClient = inject(HttpClient);

  title: String = "";
  description: String = "";
  userId: number = 0;


  addTask() {
    this.httpClient.post("http://localhost:8081/todolist/api/v1/tasks/add", {
      "title": this.title,
      "description": this.description,
      "userId": this.userId
      }).subscribe(() => {
        console.log("Task added successfully");
        this.title = "";
        this.description = "";
        this.userId = 0;
      });
  }

}
