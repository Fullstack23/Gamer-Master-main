import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmLoginPage } from './confirm-login.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmLoginPageRoutingModule {}
