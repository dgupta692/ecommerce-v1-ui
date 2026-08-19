import { inject, Injectable, Service, signal } from '@angular/core';
import { single } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    loading = signal(false);
}
