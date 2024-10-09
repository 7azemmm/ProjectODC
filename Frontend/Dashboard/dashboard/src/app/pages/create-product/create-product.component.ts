import { Component } from '@angular/core';
import { Product2 } from '../../model/class/product2';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule , CommonModule , RouterModule ,ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

 
  constructor(private http: HttpClient, private router: Router) {
    
   }

   productObj: any = {
    name: '',
    price: '',
    quantity: '',
    description: '',
    imagePath :''
  };
  selectedFile: File | null = null;

 

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }


   


   onCreate() {
    this.productObj.imagePath = this.selectedFile?.name;
    console.log(this.productObj)
    console.log(this.selectedFile)
    console.log(this.selectedFile?.name)
    if (!this.selectedFile) {
      alert('Please select an image file');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.productObj.name);
    formData.append('price', this.productObj.price);
    formData.append('quantity', this.productObj.quantity);
    formData.append('description', this.productObj.description);
    formData.append('imagePath', this.selectedFile, this.selectedFile.name);
    // this.productObj.imagePath = this.selectedFile.name
    this.http.post('http://127.0.0.1:8085/products/addProduct', formData )
      .subscribe((res: any) => {
        if (res.message == 'Item added successfully') {
          Swal.fire({
            title: 'Success!',
            text: res.message,  // Display the success message from the server
            icon: 'success',
            confirmButtonText: 'Ok',
          }).then(() => {
            this.router.navigate(['/dashboard']);
          });
        } else {
          Swal.fire({
            title: 'Oops!',
            text: res.message,  // Display the error message from the server
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      }, (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'An error occurred during adding product. Please try again later!',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });
  }

}
