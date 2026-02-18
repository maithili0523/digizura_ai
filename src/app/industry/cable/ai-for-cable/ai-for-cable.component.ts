import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ai-for-cable',
  templateUrl: './ai-for-cable.component.html',
  styleUrls: ['./ai-for-cable.component.css']
})
export class AiForCableComponent implements AfterViewInit {

  @HostListener('window:scroll', [])
  onScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach((el: Element) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }

  ngAfterViewInit() {
    this.onScroll();
  }
}
