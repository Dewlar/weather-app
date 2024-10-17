import { HttpInterceptorFn } from '@angular/common/http';

const API_KEY = '010721642521f31b0fbc8c3831d45951';

export const openWeatherMapInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('openweathermap.org')) {
    const newRequest = req.clone({ setParams: { appid: API_KEY } });
    return next(newRequest);
  }
  return next(req);
};
