import { Pipe, PipeTransform } from '@angular/core';

const KELVIN_AND_CELSIUS_DIFF = 273.15;

@Pipe({
  name: 'kelvinToCelsius',
  standalone: true,
})
export class KelvinToCelsiusPipe implements PipeTransform {
  public transform(value: number) {
    if (!(Number.isNaN(value) || value)) return null;
    const celsius = value - KELVIN_AND_CELSIUS_DIFF;
    return celsius.toFixed(1);
  }
}
