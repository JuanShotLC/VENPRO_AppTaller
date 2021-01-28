import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddvehiculoPage } from './addvehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: AddvehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddvehiculoPageRoutingModule {}
