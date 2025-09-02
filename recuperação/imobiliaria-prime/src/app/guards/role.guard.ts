import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];
    const user = this.auth.getUser();
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }
    // Permite array ou string
    if (Array.isArray(expectedRole)) {
      if (!user || !expectedRole.includes(user.tipo)) {
        this.router.navigate(['/']);
        return false;
      }
    } else {
      if (!user || user.tipo !== expectedRole) {
        this.router.navigate(['/']);
        return false;
      }
    }
    return true;
  }
}
