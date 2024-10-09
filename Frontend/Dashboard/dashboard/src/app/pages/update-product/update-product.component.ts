import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit } from '@angular/core';
import { Product } from '../../model/class/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type pro = {
  description:String ;
  name : String ;
  price:Number;
  quantity:Number;
}

@Component({
  selector: 'update-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container" *ngIf="productObj">
      <h2>Update Product</h2>
      <form [formGroup]="productForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Name:</label>
          <input id="name" type="text" formControlName="name" placeholder={{productObj.name}}>
        </div>
        <div class="form-group">
          <label for="price">Price:</label>
          <input id="price" type="number" formControlName="price">
        </div>
        <div class="form-group">
          <label for="quantity">Quantity:</label>
          <input id="quantity" type="number" formControlName="quantity">
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" formControlName="description"></textarea>
        </div>
        <button type="submit" [disabled]="!productForm.valid">Update Product</button>
      </form>
    </div>
  `,
  styles:[`
    .container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #333;
      text-align: center;
      margin-bottom: 20px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      color: #666;
    }
    input[type="text"],
    input[type="number"],
    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-sizing: border-box;
    }
    textarea {
      height: 100px;
      resize: vertical;
    }
    button {
      display: block;
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    button:hover {
      background-color: #0056b3;
    }
    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  `]
})
export class UpdateProductComponent implements OnInit {
  productForm: FormGroup;
  productObj: Product;
  productId = input.required<string>();

  private http = inject(HttpClient);
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.productObj = new Product();
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.http.get<Product>(`http://localhost:8085/products/GetProduct/${this.productId()}`).subscribe({
      next: (response) => {
        console.log(response)
        this.productObj = response;

        console.log(this.productObj.name)
        this.productForm.patchValue({
          name: this.productObj.name,
          price: this.productObj.price,
          quantity: this.productObj.quantity,
          description:this.productObj.description
        });
      },
      error: (error) => console.error('Error fetching product', error)
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const updatedProduct: Product = {
        ...this.productObj,
        name: this.productForm.get('name')?.value,
        price: this.productForm.get('price')?.value,
        quantity: this.productForm.get('quantity')?.value,
        description: this.productForm.get('description')?.value
      };
      this.http.put(`http://localhost:8085/products/updateProduct/${this.productId()}`, updatedProduct).subscribe({
        next: () => {
          console.log('Product updated successfully');
          this.router.navigate(['/dashboard']); // Adjust this route as needed
        },
        error: (error) => console.error('Error updating product', error)
      });
    }
  }
}
