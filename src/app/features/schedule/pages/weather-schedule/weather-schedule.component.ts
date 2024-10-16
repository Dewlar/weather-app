import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component';
import { WeatherResultsComponent } from '../../components/weather-results/weather-results.component';

@Component({
  selector: 'app-weather-schedule',
  standalone: true,
  imports: [SearchComponent, WeatherResultsComponent],
  templateUrl: './weather-schedule.component.html',
  styleUrl: './weather-schedule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherScheduleComponent {}
