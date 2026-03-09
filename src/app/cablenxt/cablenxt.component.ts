import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {
  LucideAngularModule,
  Database,
  Package,
  FileText,
  ShoppingCart,  
  Truck,
  Settings,
  Wallet,
  BarChart,
  ShieldCheck
} from 'lucide-angular';

@Component({
  selector: 'app-cablenxt',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    RouterModule
  ],
  providers: [
  {
    provide: 'lucideIcons',
    useValue: {
      Database,
      Package,
      FileText,
      ShoppingCart,  
      Truck,
      Settings,
      Wallet,
      BarChart, 
      ShieldCheck
    }
  }
],
  templateUrl: './cablenxt.component.html',
  styleUrl: './cablenxt.component.css'
})
export class CablenxtComponent implements OnInit {


  
constructor(private router: Router) {}

  goToPage(path: string) {
    this.router.navigate([path]);
  }



  currentSlide = 0;
  totalSlides = 5;
  transition = 'transform 0.8s ease-in-out';


  ngOnInit() {

    setInterval(() => {

      this.currentSlide++;

      if (this.currentSlide === this.totalSlides) {

        setTimeout(() => {

          this.transition = 'none';
          this.currentSlide = 0;

          setTimeout(() => {
            this.transition = 'transform 0.8s ease-in-out';
          }, 50);

        }, 800);

      }

    }, 4000);

  }

}