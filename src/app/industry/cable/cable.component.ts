import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cable.component.html',
  styleUrls: ['./cable.component.css']
})
export class CableComponent implements OnInit {

  currentSlide = 0;

  slides = [
    {
      image: 'https://img.freepik.com/premium-photo/closeup-fiber-optic-cable-generative-ai_220873-18024.jpg?w=2000',
      text: 'Cable Maker'
    },
    {
      image: 'https://www.netsuite.com/portal/assets/img/business-articles/erp/social-ai-erp.jpg',
      text: 'ERP for Cable'
    },
    {
      image: 'https://logicinfo.com/wp-content/uploads/2023/06/blog-markdown-202306-scaled.jpg',
      text: 'AI for Cable'
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
