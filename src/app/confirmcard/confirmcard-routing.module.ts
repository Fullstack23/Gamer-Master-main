import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmcardPage } from './confirmcard.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmcardPageRoutingModule {}
