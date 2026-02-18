import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './hero/hero.component'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    HeroComponent 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  showIndustryPanel = false;

  onIndustryToggle(open: boolean) {
    this.showIndustryPanel = open;

    if (open) {
      document.body.classList.add('body-with-panel');
    } else {
      document.body.classList.remove('body-with-panel');
    }
  }
}
