import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderService} from '../header.service';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [HeaderComponent, LoginComponent],
  providers: [HeaderService],
  exports: [HeaderComponent, LoginComponent]
})
export class HeaderModule {
}
