import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcomputadorPage } from './addcomputador.page';

const routes: Routes = [
  {
    path: '',
    component: AddcomputadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcomputadorPageRoutingModule {}
