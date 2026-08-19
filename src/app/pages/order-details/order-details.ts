import { Component, inject, OnInit, signal } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-order-details',
  imports: [],
  templateUrl: './order-details.html',
  styleUrl: './order-details.css',
})
export class OrderDetailsComponent implements OnInit {
  private orderService = inject(OrderService);

  private route = inject(ActivatedRoute);

  order = signal<Order | undefined>(undefined);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.orderService
      .getOrder(id)
      .subscribe({
        next: (response) => {
          this.order.set(response);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
