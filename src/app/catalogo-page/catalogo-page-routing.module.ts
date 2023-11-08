import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogoPagePage } from './catalogo-page.page';

const routes: Routes = [
  {
    path: '',
    component: CatalogoPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogoPagePageRoutingModule {}
