import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'schedule', pathMatch: 'full' },
  {
    path: 'schedule',
    loadComponent: () =>
      import('./features/schedule/pages/weather-schedule/weather-schedule.component').then(
        (m) => m.WeatherScheduleComponent
      ),
  },
  { path: '**', redirectTo: 'schedule', pathMatch: 'full' },
];
