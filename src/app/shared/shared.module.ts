import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [SideMenuComponent, Error404Component],
  imports: [CommonModule, RouterModule],
  exports: [SideMenuComponent],
})
export class SharedModule {}
