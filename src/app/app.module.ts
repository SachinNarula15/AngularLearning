import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './rootapp/app.component';
import { NewappComponent } from './newapp/newapp.component';
import { HomeappComponent } from './homeapp/homeapp.component';


@NgModule({
  declarations: [
    AppComponent,
    NewappComponent,
    HomeappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
