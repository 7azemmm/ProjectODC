import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-products',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.css'
})
export class GetProductsComponent implements OnInit {
  product_arr : any[] = [];
  

  constructor(private httpClient: HttpClient ,private router: Router) {}


  httpclient = inject(HttpClient);
  
  fetchData(){
   this.httpClient.get('http://localhost:8085/products/GetAllProduct').subscribe((Response :any)=>
   this.product_arr=Response)}

   // console.log(product_arr));
 
  ngOnInit(): void {
    this.fetchData();
  }

  getImageUrl(imagePath: string): string {
    return `http://localhost:8085/${imagePath}`;
  }


  onDelete(id: string) {
    // Use SweetAlert for confirmation before proceeding with deletion
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with HTTP DELETE request if confirmed
        this.httpClient.delete(`http://localhost:8085/products/deleteProduct/${id}`).subscribe(
          (response: any) => {
            if (response.message == 'item deleted') {
              // Use SweetAlert for success message
              Swal.fire(
                'Deleted!',
                'The product has been deleted.',
                'success'
              ).then(() => {
                this.router.navigate(['/dashboard']);
              });
            } else {
              // Handle failure response
              Swal.fire(
                'Failed!',
                'There was an issue deleting the product.',
                'error'
              );
            }
            
          }
        );
      }
    });
  }
  


}
  

  


