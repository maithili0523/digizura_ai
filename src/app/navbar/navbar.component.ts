import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LucideAngularModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMenuOpen = false;
  isNxtMenuOpen = false;

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
    this.isNxtMenuOpen = false;
  }

  toggleNxtMenu(event: Event) {
    event.stopPropagation();
    this.isNxtMenuOpen = !this.isNxtMenuOpen;
    this.isMenuOpen = false;
  }

  @HostListener('document:click')
  closeAllMenus() {
    this.isMenuOpen = false;
    this.isNxtMenuOpen = false;
  }
}