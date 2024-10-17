import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherScheduleComponent } from './features/schedule/pages/weather-schedule/weather-schedule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherScheduleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected title = 'weather-app';
}
