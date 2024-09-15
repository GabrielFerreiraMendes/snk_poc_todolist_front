import { UserService } from '../../service/user/user-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user/user';

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

  deleteUser(user: User) {
    this.userService.delete(user).subscribe({
      next: (res: any) => { this.fetchData(); },

      error: (err) => {
        if (err.status === 409) {
          alert("Usuario possui tarefas cadastradas");
        } else {
          alert("Erro ao tentar excluir usuario");
        }
      }
    })
  }
}
