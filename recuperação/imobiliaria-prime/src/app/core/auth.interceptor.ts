import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    if (token) {
      const clone = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(clone);
    }
    return next.handle(req);
  }
}
