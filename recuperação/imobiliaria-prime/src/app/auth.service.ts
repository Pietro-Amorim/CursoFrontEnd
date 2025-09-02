import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: any = null;

  login(email: string, senha: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find((u: any) => u.email === email && u.senha === senha);
    if (found) {
      this.currentUser = found;
      localStorage.setItem('currentUser', JSON.stringify(found));
      return true;
    }
    return false;
  }

  register(user: any) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    user.id = users.length + 1;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getUser(): any {
    if (this.currentUser) return this.currentUser;
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getUser();
  }

  hasRole(role: string): boolean {
    const user = this.getUser();
    return user && user.tipo === role;
  }
}
