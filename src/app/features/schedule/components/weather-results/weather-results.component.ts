import { DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, filter, switchMap } from 'rxjs';
import { KelvinToCelsiusPipe } from '../../pipes/kelvin-to-celsius.pipe';
import { SearchService } from '../../services/search.service';
import { WeatherApiService } from '../../services/weather-api.service';

@Component({
  selector: 'app-weather-results',
  standalone: true,
  imports: [DatePipe, DecimalPipe, KelvinToCelsiusPipe],
  templateUrl: './weather-results.component.html',
  styleUrl: './weather-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherResultsComponent {
  protected readonly cities = inject(SearchService).cities;

  private readonly searchService = inject(SearchService).cities;

  private readonly weatherApiService = inject(WeatherApiService);

  private readonly cities$ = toObservable(this.searchService);

  protected readonly weatherData = toSignal(
    this.cities$.pipe(
      filter((cities) => !!cities?.length),
      switchMap((cities) => {
        if (!cities) return EMPTY;
        const [city] = cities;

        return this.weatherApiService.getWeather(city).pipe(
          catchError(({ message }) => {
            console.error(message ? `Error: ${message}` : 'Weather request failed');
            return EMPTY;
          })
        );
      })
    )
  );
}
