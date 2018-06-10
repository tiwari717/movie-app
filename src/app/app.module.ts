import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './shared/matModule';

import { AppComponent } from './app.component';
import { NavListComponent } from '../app/components/navbar/nav-list/nav-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CommonModule,
    AppRoutingModule,
    MatModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
