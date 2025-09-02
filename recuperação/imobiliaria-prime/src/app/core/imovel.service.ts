import { Injectable } from '@angular/core';
import { Imovel } from '../models/imovel.model';

@Injectable({
  providedIn: 'root',
})
export class ImovelService {
  private key = 'imoveis';

  getAll(): Imovel[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  getById(id: number): Imovel | undefined {
    return this.getAll().find((i) => i.id === id);
  }

  create(imovel: Imovel) {
    const imoveis = this.getAll();
    imovel.id = imoveis.length + 1;
    imoveis.push(imovel);
    localStorage.setItem(this.key, JSON.stringify(imoveis));
  }

  update(imovel: Imovel) {
    const imoveis = this.getAll().map((i) => (i.id === imovel.id ? imovel : i));
    localStorage.setItem(this.key, JSON.stringify(imoveis));
  }

  delete(id: number) {
    const imoveis = this.getAll().filter((i) => i.id !== id);
    localStorage.setItem(this.key, JSON.stringify(imoveis));
  }
}
