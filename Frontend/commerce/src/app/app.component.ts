import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent , FooterComponent , HomeComponent , ProductsComponent,ImageSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

}
