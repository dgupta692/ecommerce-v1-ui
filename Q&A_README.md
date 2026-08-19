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

# 34. What are Angular Lifecycle Hooks?

Lifecycle Hooks are methods that Angular calls during the creation, update, and destruction of a component.

Common Lifecycle Hooks:

- ngOnInit
- ngOnChanges
- ngAfterViewInit
- ngOnDestroy

---

## 35. What is ngOnInit?

Called once after Angular initializes the component.

Example:

```typescript
ngOnInit(): void {
    this.loadProducts();
}
```

Use Cases:

- API Calls
- Initial Data Loading

---

## 36. What is ngOnChanges?

Called whenever an @Input property changes.

Example:

```typescript
ngOnChanges(): void {
    console.log('Input changed');
}
```

Use Cases:

- Detect parent-to-child data changes
- Refresh UI

---

## 37. What is ngAfterViewInit?

Called after Angular initializes the component view.

Example:

```typescript
ngAfterViewInit(): void {
    console.log('View loaded');
}
```

Use Cases:

- Access UI elements
- Initialize charts
- Focus inputs

---

## 38. What is ngOnDestroy?

Called when a component is destroyed.

Example:

```typescript
ngOnDestroy(): void {
    console.log('Component destroyed');
}
```

Use Cases:

- Cleanup resources
- Unsubscribe observables
- Clear timers

---

## 39. Why is ngOnDestroy Important?

Without cleanup:

```text
Memory Leaks
Multiple API Subscriptions
Performance Issues
```

Example:

```typescript
this.subscription.unsubscribe();
```

---

# 40. What are RxJS Operators?

Operators are functions used to transform, filter, combine, and handle Observable streams.

Examples:

- map
- tap
- switchMap
- catchError
- forkJoin

---

## 41. What is map()?

Used to transform emitted data.

Example:

```typescript
map(product =>
({
    ...product,
    price: product.price * 0.9
}))
```

Use Case:

```text
Transform API Response
```

---

## 42. What is tap()?

Used for side effects.

Example:

```typescript
tap(response =>
{
    console.log(response);
})
```

Use Cases:

- Logging
- Debugging

It does not modify data.

---

## 43. What is switchMap()?

Cancels the previous Observable and subscribes to a new one.

Example:

```typescript
searchText$
    .pipe(
        switchMap(text =>
            this.productService.search(text)
        )
    );
```

Use Cases:

- Search Boxes
- Autocomplete

---

## 44. What is catchError()?

Used to handle errors inside RxJS pipelines.

Example:

```typescript
catchError(err =>
{
    console.error(err);

    return throwError(() => err);
});
```

---

## 45. What is forkJoin()?

Executes multiple API calls and waits for all of them to complete.

Example:

```typescript
forkJoin([
    this.productService.getProducts(),
    this.orderService.getOrders()
]);
```

Use Cases:

- Dashboard Pages
- Multiple API Calls

---

# 46. What is a Loading Spinner?

A visual indicator shown while waiting for data.

Example:

```typescript
isLoading = signal(true);
```

API Success:

```typescript
this.isLoading.set(false);
```

Use Case:

```text
Better User Experience
```

---

# 47. What is Global Error Handling?

A centralized way of handling application-wide errors.

Instead of:

```typescript
error: err =>
{
}
```

inside every API call.

We use:

```typescript
Error Interceptor
```

---

## 48. Why use an Error Interceptor?

Benefits:

- Centralized error handling
- Less duplicate code
- Better user experience

Examples:

```text
401 → Login Page

404 → Not Found

500 → Server Error Message
```

---

# 49. What is Pagination?

Pagination divides large datasets into smaller pages.

Example:

```text
Page 1
Page 2
Page 3
```

Benefits:

- Better Performance
- Faster Loading
- Reduced Network Traffic

---

## 50. Backend Pagination Example

```http
/api/product?pageNumber=1&pageSize=10
```

---

# 51. What is Search Functionality in Angular?

Allows users to filter or search data.

Example:

```html
<input [(ngModel)]="searchText">
```

Use Cases:

- Product Search
- Customer Search

---

## 52. Why use debounceTime()?

Prevents API calls on every key press.

Example:

```typescript
debounceTime(500)
```

Flow:

```text
L
La
Lap
Laptop
```

Only one API call is sent.

---

## 53. What is distinctUntilChanged()?

Prevents duplicate API calls for the same value.

Example:

```typescript
distinctUntilChanged()
```

Use Case:

```text
Laptop
Laptop
Laptop
```

Only first request is executed.

---

# 54. What are Angular Pipes?

Pipes transform data before displaying it.

Built-in Pipes:

- date
- currency
- uppercase
- lowercase

Example:

```html
{{ price | currency:'INR' }}
```

---

## 55. What is a Custom Pipe?

A user-defined pipe.

Example:

```typescript
@Pipe({
    name:'orderStatus'
})
```

Use Case:

```text
P → Pending

C → Completed
```

---

# 56. What is Computed Signal?

Derived state based on other signals.

Example:

```typescript
cartItems = signal([]);

cartCount = computed(
    () => this.cartItems().length
);
```

Use Cases:

- Cart Count
- Derived Data

---

# 57. What is effect()?

Runs automatically when dependent signals change.

Example:

```typescript
effect(() =>
{
    console.log(
        this.cartCount()
    );
});
```

Use Cases:

- Logging
- Notifications
- Side Effects

---

# 58. What are Environment Files?

Environment files store application configuration.

Example:

```typescript
export const environment = {
  apiGateway:
    'http://localhost:7006'
};
```

Use Cases:

- API URLs
- Feature Flags
- Environment-specific settings

---

# 59. Why Should API URLs Not Be Hardcoded?

Bad:

```typescript
'http://localhost:7006/products/api/product'
```

Good:

```typescript
environment.apiGateway
```

Benefits:

- Easier maintenance
- Production deployment support

---

# 60. What is State Management?

State Management is the process of managing application data.

Examples:

```text
Logged In User
Cart Items
Selected Product
Theme
```

Angular Options:

- Signals
- Services
- NgRx

---

# 61. What is the Difference Between Signal and Observable?

Signal:

```text
Synchronous
Stores current value
Angular State Management
```

Observable:

```text
Asynchronous
Stream of data
API Calls
```

Use:

```typescript
signal()
```

for UI state.

Use:

```typescript
Observable
```

for HTTP requests.

---

# Additional Features Implemented

✅ Login Page

✅ JWT Authentication

✅ Product Listing

✅ Product Details

✅ Order Creation

✅ Order History

✅ Order Details

✅ Route Parameters

✅ Reactive Forms

✅ Template Forms

✅ Signals

✅ @Input

✅ @Output

✅ Parent-Child Communication

✅ Guards

✅ Interceptors

✅ Navbar

✅ Logout

✅ Dynamic Routing

✅ HttpClient

✅ RxJS

✅ localStorage

✅ Dependency Injection