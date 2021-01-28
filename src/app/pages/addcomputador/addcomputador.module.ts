import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcomputadorPageRoutingModule } from './addcomputador-routing.module';

import { AddcomputadorPage } from './addcomputador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcomputadorPageRoutingModule
  ],
  declarations: [AddcomputadorPage]
})
export class AddcomputadorPageModule {}
