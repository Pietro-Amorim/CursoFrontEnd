import { Injectable } from '@angular/core';
import { Interesse } from '../models/interesse.model';

@Injectable({
  providedIn: 'root',
})
export class InteresseService {
  private key = 'interesses';

  getAll(): Interesse[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  getByImovel(imovelId: number): Interesse[] {
    return this.getAll().filter((i) => i.imovelId === imovelId);
  }

  create(interesse: Interesse) {
    const interesses = this.getAll();
    interesse.id = interesses.length + 1;
    interesses.push(interesse);
    localStorage.setItem(this.key, JSON.stringify(interesses));
  }
}
