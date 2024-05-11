import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciopagePageRoutingModule } from './iniciopage-routing.module';

import { IniciopagePage } from './iniciopage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciopagePageRoutingModule
  ],
  declarations: [IniciopagePage]
})
export class IniciopagePageModule {}
