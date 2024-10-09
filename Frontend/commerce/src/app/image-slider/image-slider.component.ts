import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone:true,
  imports: [CommonModule , NgFor],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent implements OnInit {
  // Image URLs or paths for the slider
  images: string[] = [
    '/pic4.jpg',
    '/pic2.png',
    '/pic-1.jpg',
    '/pic3.png'
  ];

  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    // Optionally set an interval to auto-slide every 5 seconds
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
