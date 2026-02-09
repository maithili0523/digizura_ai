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

  texts = [
    'slide1',
    'Partnering In Success',
    'AI ON ERP'
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.texts.length;
    }, 3000);
  }
}
