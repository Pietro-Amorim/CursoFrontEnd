import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProdutosComponent } from './page/produtos/produtos.component';
import { ContatoComponent } from './page/contato/contato.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'contato', component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
