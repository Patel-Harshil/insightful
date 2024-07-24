import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{
  path: 'register', component: RegistrationComponent
}]

@NgModule({
  declarations: [],
  imports: [CommonModule,],
})
export class AccountModule {}
