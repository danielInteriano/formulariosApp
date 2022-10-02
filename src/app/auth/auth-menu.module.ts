import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthMenuRoutingModule } from './auth-menu-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [RegistroComponent, LoginComponent],
  imports: [CommonModule, AuthMenuRoutingModule, ReactiveFormsModule],
})
export class AuthMenuModule {}
