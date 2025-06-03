import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private apiUrl: string = 'http://localhost:3005/vagas'; //endereço da API

  constructor(private http: HttpClient){ }

  // criar os metodos conexões com a ApiREST

  // get
  getVagas(): Observable<Vaga[]> { //observable -> rxjs => tradutor de json para ts
    return this.http.get<Vaga[]>(this.apiUrl); //conecta com a api para coletar os dados
  }
  // post

  // put

  // delete
}
