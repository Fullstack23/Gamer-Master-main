import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetalhadoPageRoutingModule } from './item-detalhado-routing.module';

import { ItemDetalhadoPage } from './item-detalhado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetalhadoPageRoutingModule
  ],
  declarations: [ItemDetalhadoPage]
})
export class ItemDetalhadoPageModule {}
