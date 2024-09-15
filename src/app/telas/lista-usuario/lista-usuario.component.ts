import { UserService } from '../../service/user/user-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuario',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})

export class ListaUsuarioComponent implements OnInit {
  data$ = new Observable<User[]>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.data$ = this.userService.findAll();
  }

  deleteUser(user: User) {
    this.userService.delete(user).subscribe({
      next: (res: any) => { this.fetchData(); },
      error: (err) => {
        if (err.status == 409) {
          alert("Usuario possui tarefas cadastradas!");
        } else {
          alert("Erro ao tentar excluir usuario!");
        }
      }
    })
  }
}
