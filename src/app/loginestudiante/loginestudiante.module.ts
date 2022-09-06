import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginestudiantePageRoutingModule } from './loginestudiante-routing.module';

import { LoginestudiantePage } from './loginestudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginestudiantePageRoutingModule
  ],
  declarations: [LoginestudiantePage]
})
export class LoginestudiantePageModule {}
