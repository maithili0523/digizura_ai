import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showIndustry = false;
  showCable = false;
  showErp = false;

  clickTimer: any = null;

  constructor(private router: Router) {}

  toggleIndustry(e: MouseEvent) {
    e.stopPropagation();
    this.showIndustry = !this.showIndustry;
    this.showCable = false;
    this.showErp = false;
  }

  toggleCable(e: MouseEvent) {
    e.stopPropagation();

    if (this.clickTimer) {
      // Double click detected
      clearTimeout(this.clickTimer);
      this.clickTimer = null;

      this.showCable = !this.showCable;
      this.showErp = false;
    } else {
      // First click
      this.clickTimer = setTimeout(() => {
        this.router.navigate(['/cable']);
        this.closeAll();
        this.clickTimer = null;
      }, 250); // delay to detect double click
    }
  }

  toggleErp(e: MouseEvent) {
    e.stopPropagation();
    this.showErp = !this.showErp;
  }

  @HostListener('document:click')
  closeAll() {
    this.showIndustry = false;
    this.showCable = false;
    this.showErp = false;
    this.clickTimer = null;
  }
}
