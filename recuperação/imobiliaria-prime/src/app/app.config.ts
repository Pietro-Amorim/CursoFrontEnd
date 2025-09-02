import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module'; // Importe as rotas

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Adicione esta linha
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
  ],
};
