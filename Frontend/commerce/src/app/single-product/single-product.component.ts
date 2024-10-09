import { HttpClient } from '@angular/common/http';
import { Component , inject, input, OnInit } from '@angular/core';

type product = {
  title : string ;
  id : number ;
  image:string;
  description : string;
  price : number;
}

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {

  product : product = {
    title:'it',
    id:23,
    image:"asdjasd",
    description:"asdasd",
    price:250,
  }
  
  productId= input.required<string>();


  http = inject(HttpClient);

  fetch(){
    this.http.get(`https://fakestoreapi.com/products/${this.productId()}`).subscribe((Response :any)=>
    this.product =Response )
  }
  
  
  
  ngOnInit(): void {
   this.fetch();
  }
  
  
}
