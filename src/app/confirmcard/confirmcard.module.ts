import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmcardPageRoutingModule } from './confirmcard-routing.module';

import { ConfirmcardPage } from './confirmcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmcardPageRoutingModule
  ],
  declarations: [ConfirmcardPage]
})
export class ConfirmcardPageModule {}
