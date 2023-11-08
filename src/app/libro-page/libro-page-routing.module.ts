import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibroPagePage } from './libro-page.page';

const routes: Routes = [
  {
    path: '',
    component: LibroPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibroPagePageRoutingModule {}
