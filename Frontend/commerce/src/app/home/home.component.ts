import { Component , Input } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() send?:string ;

  msg="hello from home component"
}
