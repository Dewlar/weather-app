import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-results',
  standalone: true,
  imports: [],
  templateUrl: './weather-results.component.html',
  styleUrl: './weather-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherResultsComponent {}
