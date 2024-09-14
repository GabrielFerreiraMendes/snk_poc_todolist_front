import { UserService } from './../../service/user-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})

export class ListaUsuarioComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any = [];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get('http://localhost:8081/todolist/api/v1/users').subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }

  findUser(userId: number) {
    return this.httpClient.get(`http://localhost:8081/todolist/api/v1/users/find/${userId}`);
  }

  deleteUser(userId: number) {
    this.userService.delete(userId).subscribe({
      next: (res: any) => { this.fetchData(); },

      error: (err) => {
        if (err.status === 409) {
          alert("Usuario possui tarefas cadastradas");
        } else {
          alert("Erro ao tentar excluir usuario");
        }
      }
    })

    if (!this.findUser(userId)) {
      alert("User not found");
      return
    }

    this.httpClient.delete(`http://localhost:8081/todolist/api/v1/users/delete/${userId}`).subscribe(() => {
      this.fetchData();
    });
  }
}
