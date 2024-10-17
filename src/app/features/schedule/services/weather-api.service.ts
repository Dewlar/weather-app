import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CityGeoData } from '../interfaces/city-geo-data';

const GEODATA_BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private readonly http = inject(HttpClient);

  public getCity(city: string) {
    const params = new HttpParams().set('q', city).set('limit', '1');

    return this.http.get<CityGeoData[]>(GEODATA_BASE_URL, { params });
  }
}
