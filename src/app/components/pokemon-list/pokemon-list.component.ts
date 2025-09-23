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
    // On peut éventuellement charger les Pokémon existants ici
    this.pokemons = [];
  }

  ouvrirBooster(): void {
    this.boosterService.ouvrir(this.dresseurId).subscribe({
      next: (nouveauxPokemons: Pokemon[]) => {
        // Remplacer les Pokémon affichés par les 10 nouvelles cartes
        this.pokemons = nouveauxPokemons;
      },
      error: (err: any) => console.error('Erreur ouverture booster', err)
    });
  }

  supprimer(id: number): void {
    // Optionnel : utiliser PokemonService pour supprimer un Pokémon
    this.pokemons = this.pokemons.filter(p => p.id !== id);
  }
}
