import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  idade: number|null = null;
  profissao: string = '';

  limparDados() {
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.idade = null;
    this.profissao = '';
  }

  validarFormulario(): boolean {
  if (!this.nome || this.nome.length <= 3) {
    alert('O nome deve ter mais de 3 caracteres.');
    return false;
  }

  if (!this.email || !this.email.includes('@')) {
    alert('Email inválido.');
    return false;
  }

  if (!this.telefone || !/^\d+$/.test(this.telefone)) {
    alert('O telefone deve conter apenas números.');
    return false;
  }

  if (this.idade === null || this.idade < 18) {
    alert('A idade deve ser igual ou maior que 18.');
    return false;
  }

  if (!this.profissao) {
    alert('Preencha a profissão.');
    return false;
  }

  return true;
}
enviarFormulario() {
  if (this.validarFormulario()) {
    alert('Formulário válido!');
    // Aqui você pode enviar os dados ou fazer outra ação
  }
}
}