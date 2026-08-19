import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request: ', req.method, req.url);
  const start = Date.now();
  return next(req).pipe(
    tap({
      next: () => {
        console.log(`Response from ${req.url} in ${Date.now() - start} ms`);
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    })
  );
};
