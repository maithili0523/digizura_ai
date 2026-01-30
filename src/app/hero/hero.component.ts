import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  currentSlide = 0;

  slides = [
    {
      image: 'https://static.vecteezy.com/system/resources/previews/022/403/663/large_2x/artificial-intelligence-technology-web-background-virtual-concept-ai-generated-photo.jpeg',
      text: 'Image Of AI'
    },
    {
      image: 'https://accordshort.com/wp-content/uploads/2024/08/image3-19.jpg',
      text: 'Transform Your Operations with ERP Systems'
    },
    {
      image: 'https://thumbs.dreamstime.com/b/ai-handshake-businessman-neural-network-office-commerce-marketing-generative-generated-274175541.jpg',
      text: 'Partnering in your Success'
    }
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 4000);
  }

  goToSlide(i: number) {
    this.currentSlide = i;
  }
}
