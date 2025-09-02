import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { ImovelDetailComponent } from './features/imovel/imovel-detail.component';
import { LoginComponent } from './features/auth/login.component';
import { RegisterComponent } from './features/auth/register.component';
import { ProfileComponent } from './features/auth/profile.component';
import { CorretorDashboardComponent } from './features/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/not-found.component';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

// Exporte as rotas aqui, apenas uma vez!
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'imovel/:id', component: ImovelDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tipo', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'corretor',
    component: CorretorDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: ['corretor', 'admin'] },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
