import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../service/task/task-service.service';
import { Task } from '../../model/user/task/task';

@Component({
  selector: 'app-add-tarefa',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './add-tarefa.component.html',
  styleUrl: './add-tarefa.component.css'
})
export class AddTarefaComponent {
  httpClient = inject(HttpClient);

  title: any = null;
  description: any = null;
  userId: any = null;
  status: any = null;

  constructor(private taskService: TaskService) { }

  addTask() {
    this.taskService.save({ id: 0, title: this.title, description: this.description, userId: this.userId, status: this.status}).subscribe({
      next: (res: any) => {
        this.title = null;
        this.description = null;
        this.userId =  null;
        this.status = null;
      },
      error: (err) => {
        if (err.status === 409) {
          alert("Usuario não cadastrado!");
        } else {
          alert("Erro ao tentar adicionar tarefa!");
        }
      }
    });
  }

}
