import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  dresseurId = 1;

  @ViewChild('lightEau') lightEau!: ElementRef;
  @ViewChild('lightFeu') lightFeu!: ElementRef;
  @ViewChild('lightElec') lightElec!: ElementRef;
  @ViewChild('lightPlante') lightPlante!: ElementRef;
  @ViewChild('lightVol') lightVol!: ElementRef;

  constructor(private boosterService: BoosterService) {}

  ngOnInit(): void {}

  ouvrirBooster(type: string): void {
    let light: ElementRef;
    switch(type) {
      case 'Eau': light = this.lightEau; break;
      case 'Feu': light = this.lightFeu; break;
      case 'Électrik': light = this.lightElec; break;
      case 'Plante': light = this.lightPlante; break;
      case 'Vol': light = this.lightVol; break;
      default: return;
    }

    // Animation lumière
    light.nativeElement.querySelector('.booster-light').style.opacity = '1';
    setTimeout(() => light.nativeElement.querySelector('.booster-light').style.opacity = '0', 300);

    // Appel service backend
    this.boosterService.ouvrirParType(this.dresseurId, type).subscribe({
      next: (nouveauxPokemons: Pokemon[]) => this.pokemons.push(...nouveauxPokemons),
      error: (err) => console.error('Erreur ouverture booster', err)
    });
  }

  supprimer(id: number): void {
    this.pokemons = this.pokemons.filter(p => p.id !== id);
  }
}
