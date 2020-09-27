import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginBlockComponent } from '../auth/components/login-block/login-block.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginBlockComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: LoginBlockComponent }]),
  ],
  exports: [
    SharedModule,
    LoginBlockComponent,
    
  ]
})

export class AuthModule { }