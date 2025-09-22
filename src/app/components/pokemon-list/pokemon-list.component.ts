import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: false
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  dresseurId = 1; // ID du dresseur connecté

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonService.getAll().subscribe({
      next: (data: Pokemon[]) => this.pokemons = data,
      error: err => console.error('Erreur chargement Pokémons', err)
    });
  }

  supprimer(id: number): void {
    this.pokemonService.delete(id).subscribe({
      next: () => this.loadPokemons(),
      error: err => console.error('Erreur suppression Pokémon', err)
    });
  }

  ouvrirBooster(): void {
    this.pokemonService.openBooster(this.dresseurId).subscribe({
      next: (nouveauxPokemons: Pokemon[]) => {
        this.pokemons.push(...nouveauxPokemons);
      },
      error: err => console.error('Erreur ouverture booster', err)
    });
  }
}
