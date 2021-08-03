import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import { LightComponent } from './light/light.component';
import { Day2Component } from './day2/day2.component';
import { FormsModule } from '@angular/forms';
import { StrucdirComponent } from './strucdir/strucdir.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { LikedislikeComponent } from './likedislike/likedislike.component';
import { MenuconfigComponent } from './menuconfig/menuconfig.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfficeComponent,
    LightComponent,
    Day2Component,
    StrucdirComponent,
    SwitchdemoComponent,
    FordemoComponent,
    LikedislikeComponent,
    MenuconfigComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
