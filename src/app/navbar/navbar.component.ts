import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showIndustryPanel = false;
  showSubMenu = false;
  showErpMenu = false;

  clickTimer: any;
  clickCount: number = 0;

  constructor(private router: Router) {}

  toggleIndustry() {
    this.showIndustryPanel = !this.showIndustryPanel;
    this.showSubMenu = false;
    this.showErpMenu = false;

    if (this.showIndustryPanel) {
      document.body.classList.add('body-with-panel');
    } else {
      document.body.classList.remove('body-with-panel');
    }
  }

  // SINGLE CLICK → open Cable page
  // DOUBLE CLICK → open submenu
  onClick(event: Event) {
    this.clickCount++;

    if (this.clickCount === 1) {
      this.clickTimer = setTimeout(() => {
        this.clickCount = 0;
        this.router.navigate(['/cable']);
      }, 400);
    } 
    else if (this.clickCount === 2) {
      clearTimeout(this.clickTimer);
      this.clickCount = 0;
      this.toggleSubMenu();
    }
  }

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
    this.showErpMenu = false; // close ERP when toggling Cable
  }

  toggleErp(event: Event) {
    event.stopPropagation();
    this.showErpMenu = !this.showErpMenu; // toggle ERP open/close
  }

  openCableMaker(event: Event) {
    event.stopPropagation();
    this.showErpMenu = false; // ensure ERP is closed
    this.router.navigate(['/cable-maker']);
  }

  closeAll() {
    this.showIndustryPanel = false;
    this.showSubMenu = false;
    this.showErpMenu = false;
    document.body.classList.remove('body-with-panel');
  }
}
