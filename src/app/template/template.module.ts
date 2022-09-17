import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { ExistenciaMinimaDirective } from './directives/existencia-minima.directive';
import { SwitchesComponent } from './switches/switches.component';
import { TemplateRoutingModule } from './template-routing.module';

@NgModule({
  declarations: [
    SwitchesComponent,
    DinamicosComponent,
    BasicosComponent,
    ExistenciaMinimaDirective,
  ],
  imports: [CommonModule, FormsModule, TemplateRoutingModule],
})
export class TemplateModule {}
