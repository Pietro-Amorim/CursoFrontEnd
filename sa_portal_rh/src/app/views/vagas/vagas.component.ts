import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagasService } from 'src/app/services/vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})

//controller -> view -> model
export class VagasComponent implements OnInit {
  public vagas: Vaga[] = []; // vetor para armazenar as vagas do BD

  constructor(private _vagasService: VagasService){}
  //injeta o serviço de vagas dentro do componente
  
  ngOnInit(): void {
    this.listarVagas(); // chama a função para listar as vagas quando o componente é inicializado
  }

  //função para listar as vagas
  listarVagas() {
    this._vagasService.getVagas().subscribe(  // subscribe para receber os dados do serviço e tratar para o vetor
      (e) => {
        this.vagas = e.map(
          (vaga) => {
            return new Vaga(
              vaga.id,
              vaga.nome,
              vaga.foto,
              vaga.descricao,
              vaga.salario
            );
          }
        ); 
      }
    )    
  }

}
