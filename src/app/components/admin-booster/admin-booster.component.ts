import { Component, OnInit } from '@angular/core';
import { BoosterService } from '../../services/booster.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-admin-booster',
  templateUrl: './admin-booster.component.html',
  styleUrls: ['./admin-booster.component.css'],
  standalone: false
})
export class AdminBoosterComponent implements OnInit {

  pokemons: Pokemon[] = [];
  dresseurId = 1; // ID du dresseur connecté

  constructor(private boosterService: BoosterService) {}

  ngOnInit(): void {
    // Optionnel : charger les Pokémon déjà existants
  }

  ouvrirBooster(): void {
    this.boosterService.ouvrir(this.dresseurId).subscribe({
      next: (nouveauxPokemons: Pokemon[]) => {
        // Ajouter les nouveaux Pokémon à la liste
        this.pokemons.push(...nouveauxPokemons);
      },
      error: (err: any) => console.error('Erreur ouverture booster', err)
    });
  }

  supprimer(id: number): void {
    // Si tu veux supprimer un Pokémon de l'affichage seulement
    this.pokemons = this.pokemons.filter(p => p.id !== id);
    // ou appeler un service backend si nécessaire
  }
}
