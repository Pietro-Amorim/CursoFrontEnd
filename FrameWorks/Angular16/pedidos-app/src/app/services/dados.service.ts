import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Produto } from '../models/produto.model';
import { Pedido } from '../models/pedido.model';
import { observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private clientes: Cliente[] = [];
  private produtos: Produto[] = [];
  private pedidos: Pedido[] = [];

  constructor() { }

  //métodos
  getClientes(): Cliente[]{  //método psrs lidtsr todos os clienes do vetor
    return this.clientes;
  }

  adicionarClientes(cliente: Cliente): void {  //método para adicionar um cliente ao vetor
    this.clientes.push(cliente);
  }

  getProdutos(): Produto[]{
    return this.produtos;
  }

  adicionarProdutos(produto: Produto): void {
    this.produtos.push(produto);
  }

  getPedidos(): Pedido[]{
    return this.pedidos;
  }

  adicionarPedidos(pedido: Pedido): void {
    this.pedidos.push(pedido);
  }

}