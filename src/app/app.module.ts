import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HeaderModule} from './modules/header/header.module';


import {AppComponent} from './app.component';
import {HeaderService} from './modules/header.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
