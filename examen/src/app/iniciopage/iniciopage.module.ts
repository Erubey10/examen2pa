import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciopagePageRoutingModule } from './iniciopage-routing.module';

import { IniciopagePage } from './iniciopage.page';
import { DetallesCandidatoModule } from '../detalles-candidato/detalles-candidato.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciopagePageRoutingModule,
    DetallesCandidatoModule 
  ],
  declarations: [IniciopagePage]
})
export class IniciopagePageModule {}
