import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDetalhadoPage } from './item-detalhado.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDetalhadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDetalhadoPageRoutingModule {}
