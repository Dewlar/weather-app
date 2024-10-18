import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CityGeoDataInterface } from '../interfaces/city-geo-data.interface';
import { WeatherResponse } from '../interfaces/weather.interfaces';

const GEODATA_API_ENDPOINT = 'https://api.openweathermap.org/geo/1.0/direct';
const WEATHER_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private readonly http = inject(HttpClient);

  public getCity(city: string) {
    const params = new HttpParams().set('q', city).set('limit', '1');

    return this.http.get<CityGeoDataInterface[]>(GEODATA_API_ENDPOINT, { params });
  }

  public getWeather(city: CityGeoDataInterface) {
    const params = new HttpParams().set('lat', city.lat).set('lon', city.lon);

    return this.http.get<WeatherResponse>(WEATHER_API_ENDPOINT, { params });
  }
}
