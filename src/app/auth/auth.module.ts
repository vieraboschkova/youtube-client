import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginBlockComponent } from './components/login-block/login-block.component';
// import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    // LoginBlockComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class AuthModule { }
