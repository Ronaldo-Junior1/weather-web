import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomePageRoutingModule } from './home-page-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HttpClientModule
  ]
})
export class HomePageModule { }
