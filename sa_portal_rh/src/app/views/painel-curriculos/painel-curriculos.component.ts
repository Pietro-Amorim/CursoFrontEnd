import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-painel-Curriculos',
  templateUrl: './painel-Curriculos.component.html',
  styleUrls: ['./painel-Curriculos.component.scss']
})
export class PainelCurriculosComponent implements OnInit{ //controler ->
  //atributos
  public curriculo: Curriculo = new Curriculo(0,"","","",0);
  //rastrear os dados no formulário por interpolação {{}}
  public curriculos: Curriculo[] = []; // vetor para armazenar as Curriculos do BD

  //construtor
  constructor(private _curriculosService: CurriculosService){}
  // aplicando o service no contrutor

  // método onInit
  ngOnInit(): void{
    this.listarCurriculos();
  }

  // 4 métodos para o crud
  //READ - Curriculos
  listarCurriculos(): void{
    this._curriculosService.getCurriculos().subscribe(
      (e) => {
        this.curriculos = e.map(
          (curriculo)=> Curriculo.fromMap(curriculo)
        );
      }, (error) => {
        console.error("Erro ao Listar Curriculos: ",error);
      }
    );
  }

  //listar Curriculo por ID -READ - Curriculo unica
  listarCurriculoPorId(curriculo:Curriculo): void{
    // método para listar uma Curriculo no Formulário para Edição
    this.curriculo = curriculo;
    //a Curriculo clicada é definida como a Curriculo atual do Formulário
  }

  // CREATE - Curriculo
  cadastrarCurriculo(): void{
    this._curriculosService.postCurriculo(this.curriculo).subscribe(
      () =>{
        this.curriculo = new Curriculo(0, "", "", "", 0); //limpa o Formulário
        this.listarCurriculos(); //lista as Curriculos novamente
      }, (error) => {console.error("Erro ao Cadastrar Curriculo: ", error);}
    );
  }

  // UPDATE - Curriculo
  atualizarCurriculo(id:any):void{
    this._curriculosService.putCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', 0); //limpa o formulário
        this.listarCurriculos(); //lista as Curriculo novamente
      },
      (error) => {console.error('Erro ao Atualizar Curriculo: ', error);
      }
    );
  }

  //DELETE Curriculo
  excluirCurriculo(id:any): void{
    this._curriculosService.deleteCurriculo(id).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', 0); //limpa o formulário
        this.listarCurriculos(); //lista as Curriculo novamente
      },
      (error) => {
        console.error('Erro ao Deletar Curriculo: ', error);
      }
    );
  }

}
