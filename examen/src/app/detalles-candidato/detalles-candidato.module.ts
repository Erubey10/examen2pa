import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DetallesCandidatoComponent } from './detalles-candidato.component';

@NgModule({
  declarations: [
    DetallesCandidatoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    DetallesCandidatoComponent
  ]
})
export class DetallesCandidatoModule {}