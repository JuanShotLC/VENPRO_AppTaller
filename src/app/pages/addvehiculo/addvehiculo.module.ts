import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddvehiculoPageRoutingModule } from './addvehiculo-routing.module';

import { AddvehiculoPage } from './addvehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddvehiculoPageRoutingModule
  ],
  declarations: [AddvehiculoPage]
})
export class AddvehiculoPageModule {}
