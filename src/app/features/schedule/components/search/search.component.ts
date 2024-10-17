import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  private readonly weatherApiService = inject(WeatherApiService);
}
