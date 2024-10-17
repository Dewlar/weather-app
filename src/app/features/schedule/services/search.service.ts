import { Injectable, signal } from '@angular/core';
import { CityGeoData } from '../interfaces/city-geo-data';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly _cities = signal<CityGeoData[] | null>(null);

  public cities = this._cities.asReadonly();

  public setSities(sities: CityGeoData[]) {
    this._cities.set(sities);
  }
}
