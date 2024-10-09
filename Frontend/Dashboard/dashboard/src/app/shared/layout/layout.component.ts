import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { CreateProductComponent } from '../../pages/create-product/create-product.component';
import { GetProductsComponent } from '../../pages/get-products/get-products.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet , RouterLink , DashboardComponent , CreateProductComponent ,GetProductsComponent] ,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  userName: string | null = null;
  constructor(private router: Router){this.getUserName();}
  getUserName() {
    this.userName = localStorage.getItem('name'); // Assuming you store the name with the key 'name'
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
