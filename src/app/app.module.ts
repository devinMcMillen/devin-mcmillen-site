import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AlgorithmsComponent } from './pages/algorithms/algorithms.component';
import { DataStructuresComponent } from './pages/data-structures/data-structures.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './page-layout/navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AlgorithmsComponent,
    DataStructuresComponent,
    HomePageComponent,
    NavbarComponent,
    PagesComponent,
    ComingSoonComponent,
    ErrorNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
