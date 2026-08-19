import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { OrderService } from '../../services/order.service';
import { FormsModule } from '@angular/forms'
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetailsComponent implements OnInit {
  quantity = 1;
  private productService = inject(ProductService);
  private orderService = inject(OrderService);
  private route = inject(ActivatedRoute);
  product = signal<Product | undefined>(undefined);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.productService.getProductById(id).subscribe({
      next: (response) => {
        this.product.set(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  placeOrder(): void {
    if (!this.product())
      return;

    this.orderService.createOrder({
      productId: this.product()!.id,
      quantity: this.quantity
    }).subscribe({
      next: order => {
        console.log(order);

        alert('Order created successfully!!!')
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
