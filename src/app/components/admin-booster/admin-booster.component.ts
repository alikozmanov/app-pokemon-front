import { Component, OnInit } from '@angular/core';
import { BoosterService } from '../../services/booster.service';
import { Booster } from '../../models/booster.model';

@Component({
  selector: 'app-admin-booster',
  templateUrl: './admin-booster.component.html',
  styleUrls: ['./admin-booster.component.css'],
  standalone: false
})
export class AdminBoosterComponent implements OnInit {
  boosters: Booster[] = [];

  constructor(private boosterService: BoosterService) {}

  ngOnInit(): void {
    this.loadBoosters();
  }

  loadBoosters(): void {
    this.boosterService.getAll().subscribe({
      next: (data) => this.boosters = data,
      error: (err) => console.error('Erreur chargement boosters', err)
    });
  }

  supprimer(id: number): void {
    this.boosterService.delete(id).subscribe({
      next: () => this.loadBoosters(),
      error: (err) => console.error('Erreur suppression booster', err)
    });
  }
}
