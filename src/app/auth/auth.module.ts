import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginBlockComponent } from '../auth/components/login-block/login-block.component';

@NgModule({
  declarations: [
    LoginBlockComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    SharedModule,
    LoginBlockComponent,
  ]
})

export class AuthModule { }