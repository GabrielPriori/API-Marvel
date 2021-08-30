import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { MarvelCharacterComponent } from './marvel/marvel-character/marvel-character.component';
import { MarvelQuadrinhosComponent } from './marvel/marvel-quadrinho/marvel-quadrinhos.component';
import { MarvelEventosComponent } from './marvel/marvel-eventos/marvel-eventos.component';
import { MarvelSeriesComponent } from './marvel/marvel-series/marvel-series.component';
import { MarvelHistoriasComponent } from './marvel/marvel-historias/marvel-historias.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MarvelCharacterComponent,
    MarvelQuadrinhosComponent,
    MarvelEventosComponent,
    MarvelSeriesComponent,
    MarvelHistoriasComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
