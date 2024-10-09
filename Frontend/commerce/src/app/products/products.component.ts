import { Component, OnInit , inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit{


   product_arr : any[] = [];

   constructor(private httpClient: HttpClient) {}

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


}
