import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { DresseurListComponent } from './components/dresseur-list/dresseur-list.component';
import { DresseurFormComponent } from './components/dresseur-form/dresseur-form.component';
import { EchangeListComponent } from './components/echange-list/echange-list.component';
import { AdminCarteComponent } from './components/admin-carte/admin-carte.component';
import { AdminBoosterComponent } from './components/admin-booster/admin-booster.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'dresseurs', component: DresseurListComponent },
  { path: 'dresseur/form/:id', component: DresseurFormComponent },
  { path: 'echanges', component: EchangeListComponent },
  { path: 'admin/cartes', component: AdminCarteComponent },
  { path: 'admin/boosters', component: AdminBoosterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
