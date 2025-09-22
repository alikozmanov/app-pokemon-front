import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { Booster } from '../models/booster.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://localhost:8080/api/pokemons';
  private boosterUrl = 'http://localhost:8080/api/boosters';

  constructor(private http: HttpClient) {}

  // Récupérer tous les Pokémon
  getAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  // Récupérer un Pokémon par ID
  get(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }

  // Créer un Pokémon
  create(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.apiUrl, pokemon);
  }

  // Supprimer un Pokémon
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Ouvrir un booster pour un dresseur
  openBooster(dresseurId: number): Observable<Pokemon[]> {
    return this.http.post<Booster>(`${this.boosterUrl}/ouvrir/${dresseurId}`, {})
      .pipe(
        map((booster: Booster) => booster.cartes) // On ne garde que la liste des Pokémon
      );
  }
}
