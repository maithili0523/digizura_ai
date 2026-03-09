import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  menuOpen = false;
  userInitial = '';

  constructor(private router: Router) {}

  ngOnInit() {

    this.updateLoginState();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateLoginState();
      }
    });

  }

  updateLoginState() {

    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const email = localStorage.getItem('userEmail');

    if (email) {
      this.userInitial = email.charAt(0).toUpperCase();
    }

  }

  toggleProfileMenu(event: Event) {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click')
  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:scroll')
  closeOnScroll() {
    this.menuOpen = false;
  }

  logout() {

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');

    this.isLoggedIn = false;
    this.menuOpen = false;

    this.router.navigate(['/signin']);

  }

}