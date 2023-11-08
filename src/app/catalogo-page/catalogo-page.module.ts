import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoPagePageRoutingModule } from './catalogo-page-routing.module';

import { CatalogoPagePage } from './catalogo-page.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CatalogoPagePage]
})
export class CatalogoPagePageModule {}
