import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-order-card',
  imports: [],
  templateUrl: './order-card.html',
  styleUrl: './order-card.css',
})
export class OrderCardComponent {
  @Input()
  order!: Order;

  @Output()
  viewOrder = new EventEmitter<number>();

  openOrder(){
    this.viewOrder.emit(this.order.id);
  }
}
