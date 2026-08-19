import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../environments/environment';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private http = inject(HttpClient);

    private apiUrl = `${Environment.apiGatewayUrl}Auth/api/Auth/login`;

    login(request: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiUrl}`, request);
    }

    isTokenExpired(): boolean {

        const token = localStorage.getItem('token');

        if (!token)
            return true;

        const decoded: any = jwtDecode(token);
        const now = Date.now() / 1000;

        return decoded.exp < now;
    }
}
