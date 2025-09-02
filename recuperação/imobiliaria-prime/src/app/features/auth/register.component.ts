import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [CommonModule, FormsModule],
})
export class RegisterComponent {
  nome = '';
  email = '';
  senha = '';
  erro = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    if (!this.nome || !this.email || !this.senha) {
      this.erro = 'Preencha todos os campos!';
      return;
    }
    this.auth.register({
      id: 0,
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      tipo: 'cliente',
    });
    this.router.navigate(['/login']);
  }
}
