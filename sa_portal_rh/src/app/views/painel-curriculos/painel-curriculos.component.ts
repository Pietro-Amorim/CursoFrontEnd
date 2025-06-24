import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-painel-Curriculos',
  templateUrl: './painel-Curriculos.component.html',
  styleUrls: ['./painel-Curriculos.component.scss']
})
export class PainelCurriculosComponent implements OnInit {

  public curriculo: Curriculo = new Curriculo(0, "", 0, "", "", "");
  public curriculos: Curriculo[] = [];

  constructor(private _curriculosService: CurriculosService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  // Listar todos os currículos
  listarCurriculos(): void {
    this._curriculosService.getCurriculos().subscribe(
      (e) => {
        this.curriculos = e.map(
          (curriculo) => Curriculo.fromMap(curriculo)
        );
      },
      (error) => {
        console.error("Erro ao Listar Curriculos: ", error);
      }
    );
  }

  // Listar um currículo por ID (edição)
  listarCurriculoPorId(curriculo: Curriculo): void {
    this.curriculo = curriculo;
  }

  // Cadastrar currículo
  cadastrarCurriculo(): void {
    this._curriculosService.postCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, "", 0, "", "", "");
        this.listarCurriculos();
      },
      (error) => {
        console.error("Erro ao Cadastrar Curriculo: ", error);
      }
    );
  }

  // Atualizar currículo
  atualizarCurriculo(id: any): void {
    this._curriculosService.putCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, "", 0, "", "", "");
        this.listarCurriculos();
      },
      (error) => {
        console.error('Erro ao Atualizar Curriculo: ', error);
      }
    );
  }

  // Excluir currículo
  excluirCurriculo(id: any): void {
    this._curriculosService.deleteCurriculo(id).subscribe(
      () => {
        this.curriculo = new Curriculo(0, "", 0, "", "", "");
        this.listarCurriculos();
      },
      (error) => {
        console.error('Erro ao Deletar Curriculo: ', error);
      }
    );
  }
}