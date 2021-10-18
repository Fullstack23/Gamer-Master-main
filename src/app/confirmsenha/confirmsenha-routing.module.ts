import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmsenhaPage } from './confirmsenha.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmsenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmsenhaPageRoutingModule {}
