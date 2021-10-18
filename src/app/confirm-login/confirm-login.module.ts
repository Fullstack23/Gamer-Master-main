import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmLoginPageRoutingModule } from './confirm-login-routing.module';

import { ConfirmLoginPage } from './confirm-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmLoginPageRoutingModule
  ],
  declarations: [ConfirmLoginPage]
})
export class ConfirmLoginPageModule {}
