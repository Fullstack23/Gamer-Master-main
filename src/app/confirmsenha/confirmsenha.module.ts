import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmsenhaPageRoutingModule } from './confirmsenha-routing.module';

import { ConfirmsenhaPage } from './confirmsenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmsenhaPageRoutingModule
  ],
  declarations: [ConfirmsenhaPage]
})
export class ConfirmsenhaPageModule {}
