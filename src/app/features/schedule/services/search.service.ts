import { Injectable, signal } from '@angular/core';
import { CityGeoDataInterface } from '../interfaces/city-geo-data.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly _cities = signal<CityGeoDataInterface[] | null>(null);

  public cities = this._cities.asReadonly();

  public setSities(sities: CityGeoDataInterface[]) {
    this._cities.set(sities);
  }
}
