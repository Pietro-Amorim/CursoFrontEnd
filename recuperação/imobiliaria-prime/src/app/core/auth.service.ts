import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;

  constructor(private router: Router) {}

  login(email: string, senha: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find((u: User) => u.email === email && u.senha === senha);
    if (found) {
      this.currentUser = found;
      localStorage.setItem('currentUser', JSON.stringify(found));
      return true;
    }
    return false;
  }

  register(user: User) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    user.id = users.length + 1;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getUser(): User | null {
    if (!this.currentUser) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    }
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.getUser() !== null;
  }

  hasRole(role: string): boolean {
    return this.getUser()?.tipo === role;
  }
}
