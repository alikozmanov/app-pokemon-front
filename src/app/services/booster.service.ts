import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booster } from '../models/booster.model';


@Injectable({
  providedIn: 'root'
})
export class BoosterService {
  private apiUrl = 'http://localhost:8080/api/boosters';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Booster[]> {
    return this.http.get<Booster[]>(this.apiUrl);
  }

  ouvrir(dresseurId: number): Observable<Booster> {
    return this.http.post<Booster>(`${this.apiUrl}/ouvrir/${dresseurId}`, {});
  }
}
