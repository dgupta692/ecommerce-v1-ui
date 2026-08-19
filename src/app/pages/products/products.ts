import { Component, inject, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-products',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  //products: Product[] = [];

  private productService = inject(ProductService);
  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe({
        next: (response) => {
          console.log('Products fetched successfully:', response);
          //this.products = response;
          this.products.set(response);
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        }
      });
  }
}
