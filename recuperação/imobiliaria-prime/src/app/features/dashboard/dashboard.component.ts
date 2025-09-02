import { Component, OnInit } from '@angular/core';
import { ImovelService } from '../../core/imovel.service';
import { Imovel } from '../../models/imovel.model';
import { AuthService } from '../../core/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule, FormsModule],
})
export class CorretorDashboardComponent implements OnInit {
  imoveis: Imovel[] = [];
  user: any = null;
  interesses: number[] = [];

  // Campos do formulário
  // Campos do formulário
  titulo: string = '';
  tipo: string = '';
  cidade: string = '';
  preco: number | null = null;
  descricao: string = '';
  imagemUrl: string = '';

  constructor(private imovelService: ImovelService, private auth: AuthService) {}

  ngOnInit() {
    this.user = this.auth.getUser();
    this.imoveis = this.imovelService.getAll();
    // Carrega interesses do cliente (simples, localStorage)
    if (this.user && this.user.tipo === 'cliente') {
      this.interesses = JSON.parse(localStorage.getItem('interesses_' + this.user.id) || '[]');
    }
  }

  podeCadastrar(): boolean {
    return this.user && (this.user.tipo === 'corretor' || this.user.tipo === 'admin');
  }

  cadastrar() {
    if (!this.titulo || !this.tipo || !this.cidade || !this.preco) return;
    this.imovelService.create({
      id: Date.now(),
      titulo: this.titulo,
      tipo: this.tipo,
      cidade: this.cidade,
      preco: this.preco,
      descricao: this.descricao,
      imagemUrl: this.imagemUrl,
      corretorId: this.user.id,
    });
    this.imoveis = this.imovelService.getAll();
    // Limpa o formulário
    this.titulo = '';
    this.tipo = '';
    this.cidade = '';
    this.preco = null;
    this.descricao = '';
    this.imagemUrl = '';
  }

  remover(id: number) {
    this.imovelService.delete(id);
    this.imoveis = this.imovelService.getAll();
  }

  toggleInteresse(imovelId: number) {
    if (!this.user || this.user.tipo !== 'cliente') return;
    const idx = this.interesses.indexOf(imovelId);
    if (idx >= 0) {
      this.interesses.splice(idx, 1);
    } else {
      this.interesses.push(imovelId);
    }
    localStorage.setItem('interesses_' + this.user.id, JSON.stringify(this.interesses));
  }

  marcouInteresse(imovelId: number): boolean {
    return this.interesses.includes(imovelId);
  }
}
