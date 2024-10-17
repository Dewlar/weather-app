import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { UrlParamsService } from '../../../../shared/services/url-params.service';
import { QueryParams } from '../../enums/query-params.enum';
import { WeatherApiService } from '../../services/weather-api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  private readonly destroy = inject(DestroyRef);

  private readonly route = inject(ActivatedRoute);

  private readonly weatherApiService = inject(WeatherApiService);

  private readonly urlParamsService = inject(UrlParamsService);

  protected searchInput = new FormControl('', { nonNullable: true });

  public ngOnInit() {
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroy)).subscribe((params) => {
      const city = params.get(QueryParams.city);
      this.searchInput.setValue(city || '');
    });

    this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((city) => this.urlParamsService.setParam(QueryParams.city, city || null)),
        switchMap((city) => this.weatherApiService.getCity(city)),
        takeUntilDestroyed(this.destroy)
      )
      .subscribe({});
  }
}
