import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmpayPage } from './confirmpay.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmpayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmpayPageRoutingModule {}
