import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmpayPageRoutingModule } from './confirmpay-routing.module';

import { ConfirmpayPage } from './confirmpay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmpayPageRoutingModule
  ],
  declarations: [ConfirmpayPage]
})
export class ConfirmpayPageModule {}
