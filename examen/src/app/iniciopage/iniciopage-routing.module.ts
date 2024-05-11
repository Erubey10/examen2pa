import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciopagePage } from './iniciopage.page';

const routes: Routes = [
  {
    path: '',
    component: IniciopagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciopagePageRoutingModule {}
