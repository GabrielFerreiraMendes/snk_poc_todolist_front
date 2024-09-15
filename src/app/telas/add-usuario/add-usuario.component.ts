import { UserService } from '../../service/user/user-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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

  constructor(private userService: UserService) {}

  postData() {
    this.userService.save(this.userName) .subscribe({
      next: (res: any) => {},
      error: (err) => {
        console.error("Error saving user: ", err);
      }
    });

    this.userName = "";
  }
}
