import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/Order';
import { Router } from '@angular/router';
import { OrderCardComponent } from '../../components/order-card/order-card';


@Component({
  selector: 'app-orders',
  imports: [OrderCardComponent],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class OrdersComponent implements OnInit {

  private router = inject(Router);
  private orderService = inject(OrderService);

  orders = signal<Order[]>([]);

  ngOnInit(): void {

    this.orderService
      .getOrders()
      .subscribe({
        next: response => {
          this.orders.set(response);
        },
        error: err => {
          console.log(err);
        }
      });
  }

  showOrder(id: number) {
    console.log(id);
    this.router.navigate(['/orders', id]);
  }
}