import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroPagePageRoutingModule } from './libro-page-routing.module';

import { LibroPagePage } from './libro-page.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibroPagePageRoutingModule,
    ComponentsModule
  ],
  declarations: [LibroPagePage]
})
export class LibroPagePageModule {}
