import { Dresseur } from './dresseur.model';
import { Pokemon } from './pokemon.model';

export class Booster {
  id: number;
  dateOuverture: string;
  dresseur: Dresseur;
  cartes: Pokemon[];

  constructor(id: number, dateOuverture: string, dresseur: Dresseur, cartes: Pokemon[]) {
    this.id = id;
    this.dateOuverture = dateOuverture;
    this.dresseur = dresseur;
    this.cartes = cartes;
  }
}
