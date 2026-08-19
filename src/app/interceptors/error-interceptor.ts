import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    catchError(
      (error: HttpErrorResponse) => {

        switch (error.status) {
          case 401:
            alert('Unauthorized');
            break;

          case 403:
            alert('Forbidden');
            break;
          case 404:
            alert('Resource Not Found');
            break;
          case 500:
            alert('Internal Server Error');
            break;
          default:
            alert('Something went wrong');
        }

        return throwError(() => error);
      }
    )
  )
};
