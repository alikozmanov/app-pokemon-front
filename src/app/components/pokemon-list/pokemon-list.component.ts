import { Component, OnInit } from '@angular/core';
import { BoosterService } from '../../services/booster.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: false,
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  dresseurId = 1; // ID du dresseur connecté

  constructor(private boosterService: BoosterService) {}

  ngOnInit(): void {
    this.pokemons = [];
  }

  // Chaque bouton ouvre un booster et remplace les cartes affichées
  ouvrirBooster(boosterNumber: number): void {
    console.log("Ouverture du booster", boosterNumber);
    this.boosterService.ouvrir(this.dresseurId).subscribe({
      next: (nouveauxPokemons: Pokemon[]) => {
        this.pokemons = nouveauxPokemons;
      },
      error: (err: any) => console.error('Erreur ouverture booster', err)
    });
  }

  supprimer(id: number): void {
    this.pokemons = this.pokemons.filter(p => p.id !== id);
  }
}
