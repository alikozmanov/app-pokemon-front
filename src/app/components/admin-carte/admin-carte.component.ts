import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-admin-carte',
  templateUrl: './admin-carte.component.html',
  styleUrls: ['./admin-carte.component.css'],
  standalone: false
})
export class AdminCarteComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonService.getAll().subscribe({
      next: (data) => this.pokemons = data,
      error: (err) => console.error('Erreur chargement Pokémon', err)
    });
  }

  supprimer(id: number): void {
    this.pokemonService.delete(id).subscribe({
      next: () => this.loadPokemons(),
      error: (err) => console.error('Erreur suppression Pokémon', err)
    });
  }
}
