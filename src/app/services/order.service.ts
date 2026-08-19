import { inject, Injectable, Service } from '@angular/core';
import { CreateOrderRequest } from '../models/CreateOrderRequest';
import { Order } from '../models/Order';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private http = inject(HttpClient);
    private apiUrl = `${Environment.apiGatewayUrl}orders/api/order`;

    createOrder(request: CreateOrderRequest): Observable<Order> {

        return this.http.post<Order>(this.apiUrl, request);
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.apiUrl);
    }

    getOrder(id: number): Observable<Order>{
        return this.http.get<Order>(`${this.apiUrl}/${id}`);
    }
}
