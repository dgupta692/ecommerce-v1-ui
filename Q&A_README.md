# Angular ECommerce Project - Interview Q&A Notes

## 1. What is Angular?

Angular is a TypeScript-based frontend framework used to build Single Page Applications (SPA).

### Advantages
- Component-based architecture
- Dependency Injection
- Routing
- Reactive Forms
- RxJS support
- Strong TypeScript typing

---

## 2. What is a Component?

A Component is a reusable UI building block that consists of:

- HTML (View)
- TypeScript (Logic)
- CSS (Styling)

Example:

```typescript
@Component({
  selector: 'app-products',
  templateUrl: './products.html'
})
export class ProductsComponent {}
```

---

## 3. What is a Service?

A Service is a class used to:

- Call APIs
- Implement business logic
- Share data across components

Example:

```typescript
@Injectable({
  providedIn: 'root'
})
export class ProductService {
}
```

---

## 4. What is Dependency Injection (DI)?

Dependency Injection allows Angular to create and provide required objects automatically.

Example:

```typescript
private productService = inject(ProductService);
```

Benefits:

- Loose coupling
- Better testing
- Improved maintainability

---

## 5. What is Routing?

Routing allows navigation between components without reloading the page.

Example:

```typescript
{
  path: 'products',
  component: ProductsComponent
}
```

---

## 6. What is routerLink?

Used for SPA navigation.

Example:

```html
<a [routerLink]="['/products']">
  Products
</a>
```

### routerLink vs href

routerLink:
- No page refresh
- Uses Angular Router

href:
- Full page refresh

---

## 7. What is router-outlet?

router-outlet is a placeholder where routed components are rendered.

Example:

```html
<router-outlet></router-outlet>
```

---

## 8. What are Route Parameters?

Route Parameters allow passing dynamic values through URLs.

Example Route:

```typescript
{
  path: 'products/:id',
  component: ProductDetailsComponent
}
```

Example URL:

```text
/products/1
```

---

## 9. What is ActivatedRoute?

ActivatedRoute is used to read route parameters.

Example:

```typescript
const id = Number(
    this.route.snapshot.paramMap.get('id')
);
```

---

## 10. What is HttpClient?

HttpClient is Angular's built-in service used for API communication.

Example:

```typescript
this.http.get<Product[]>(url);
```

Supports:

- GET
- POST
- PUT
- DELETE

---

## 11. What is an Observable?

Observable represents asynchronous data streams.

Example:

```typescript
Observable<Product[]>
```

Used heavily by Angular HttpClient.

---

## 12. Why do we use subscribe()?

Observables are lazy.

They execute only when subscribed.

Example:

```typescript
this.productService
    .getProducts()
    .subscribe();
```

---

## 13. What is ngOnInit?

ngOnInit is a lifecycle hook executed once after component initialization.

Example:

```typescript
ngOnInit(): void {
}
```

Use Cases:

- API calls
- Initial data loading

---

## 14. What is a Signal?

Signal is Angular's modern reactive state management feature.

Example:

```typescript
product = signal<Product | undefined>(undefined);
```

Set value:

```typescript
this.product.set(response);
```

Read value:

```typescript
this.product()
```

---

## 15. What is Interpolation?

Used to display data.

Example:

```html
{{ product.name }}
```

---

## 16. What is Property Binding?

Used to bind component properties to HTML.

Example:

```html
<img [src]="imageUrl">
```

---

## 17. What is Event Binding?

Used to handle user actions.

Example:

```html
<button (click)="save()">
```

---

## 18. What is Two-Way Binding?

Keeps UI and component values synchronized.

Example:

```html
<input [(ngModel)]="quantity">
```

Requires:

```typescript
FormsModule
```

---

## 19. FormsModule vs ReactiveFormsModule

### FormsModule

Used with:

```html
[(ngModel)]
```

Template-driven forms.

### ReactiveFormsModule

Used with:

```typescript
FormGroup
FormControl
Validators
```

Enterprise preferred approach.

---

## 20. What is Reactive Form?

A form managed from TypeScript.

Example:

```typescript
loginForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
});
```

---

## 21. What is FormGroup?

Represents the entire form.

Example:

```typescript
new FormGroup({
})
```

---

## 22. What is FormControl?

Represents a single input field.

Example:

```typescript
new FormControl('')
```

---

## 23. What is Validator?

Used to validate user input.

Example:

```typescript
Validators.required
```

---

## 24. What is JWT?

JWT (JSON Web Token) is used for authentication.

Flow:

```text
Login
  |
JWT Token
  |
Store Token
  |
Protected APIs
```

---

## 25. What is localStorage?

Browser storage for persisting data.

Store:

```typescript
localStorage.setItem(
  'token',
  token
);
```

Read:

```typescript
localStorage.getItem(
  'token'
);
```

Remove:

```typescript
localStorage.removeItem(
  'token'
);
```

---

## 26. What is an Interceptor?

Interceptor intercepts HTTP requests and responses.

Used for:

- JWT token attachment
- Logging
- Error handling

Example:

```typescript
Authorization:
Bearer token
```

---

## 27. Why use Interceptors?

Without interceptor:

```typescript
Authorization header
```

must be added manually on every request.

With interceptor:

```typescript
Authorization header
```

is automatically added.

---

## 28. What is a Guard?

Guard controls route access.

Example:

```typescript
canActivate:[authGuard]
```

Use Cases:

- Authentication
- Authorization

---

## 29. Guard vs Interceptor

### Guard

Protects Routes.

Example:

```text
/products
/orders
```

---

### Interceptor

Protects HTTP Requests.

Example:

```http
Authorization: Bearer token
```

---

## 30. What is @Input?

Used to pass data from Parent Component to Child Component.

Child:

```typescript
@Input()
order!: Order;
```

Parent:

```html
<app-order-card
  [order]="order">
</app-order-card>
```

Flow:

```text
Parent → Child
```

---

## 31. What is @Output?

Used to send data from Child Component to Parent Component.

Example:

```typescript
@Output()
viewOrder =
    new EventEmitter<number>();
```

---

## 32. What is EventEmitter?

Used with @Output to raise events to parent components.

Example:

```typescript
this.viewOrder.emit(
  this.order.id
);
```

---

## 33. Parent-Child Communication

### Parent → Child

Uses:

```typescript
@Input()
```

---

### Child → Parent

Uses:

```typescript
@Output()
```

and

```typescript
EventEmitter
```

---

# Project Features Implemented

✅ Login Page

✅ Reactive Forms

✅ JWT Authentication

✅ Route Navigation

✅ Product Listing

✅ Product Details

✅ GET By Id

✅ Create Order

✅ Order History

✅ Angular Services

✅ HttpClient

✅ Observables

✅ Subscribe

✅ Signals

✅ Interceptor

✅ Guard

✅ Route Parameters

✅ ActivatedRoute

✅ @Input

✅ @Output

✅ Parent Child Communication

✅ Logout

✅ Navbar