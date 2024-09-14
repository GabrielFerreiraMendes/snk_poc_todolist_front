import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, NgModule, NgModuleRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-usuario',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './add-usuario.component.html',
  styleUrl: './add-usuario.component.css'
})

export class AddUsuarioComponent {
  httpClient = inject(HttpClient);
  userName: String = "";

  postData() {
    console.log({name: this.userName});

    this.httpClient.post('http://localhost:8081/todolist/api/v1/users/add', {"name": this.userName}).subscribe();
    this.userName = "";
  }
}
