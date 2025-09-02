import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AuthGuard, RoleGuard],
  bootstrap: [], // Deixe vazio para standalone
})
export class AppModule {}
