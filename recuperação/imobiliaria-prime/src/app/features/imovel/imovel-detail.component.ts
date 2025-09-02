import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  standalone: true,
  selector: 'app-imovel-detail',
  templateUrl: './imovel-detail.component.html',
  imports: [CommonModule],
})
export class ImovelDetailComponent {
  imovel: any = null;
  user: any = null;

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const imoveis = JSON.parse(localStorage.getItem('imoveis') || '[]');
    this.imovel = imoveis.find((i: any) => i.id === id);
    this.user = this.auth.getUser();
  }

  marcarInteresse() {
    alert('Interesse registrado!');
  }
}
