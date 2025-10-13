import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { DresseurListComponent } from './components/dresseur-list/dresseur-list.component';
import { DresseurFormComponent } from './components/dresseur-form/dresseur-form.component';
import { EchangeListComponent } from './components/echange-list/echange-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonListComponent,
    DresseurListComponent,
    DresseurFormComponent,
    EchangeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [AppComponent]
})
export class AppModule { }
