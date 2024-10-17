import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlParamsService {
  private readonly router = inject(Router);

  private readonly route = inject(ActivatedRoute);

  public setParam(key: string, value: string | null) {
    this.router.navigate([], {
      queryParams: { [key]: value },
      queryParamsHandling: 'merge',
    });
  }

  public removeParam(key: string) {
    this.router.navigate([], {
      queryParams: { [key]: null },
      queryParamsHandling: 'merge',
    });
  }

  public getParam(key: string): string | null {
    return this.route.snapshot.queryParamMap.get(key);
  }
}
