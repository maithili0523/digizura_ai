import { Component } from '@angular/core';

@Component({
  selector: 'app-production-planning',
  standalone: true,
  imports: [],
  templateUrl: './production-planning.component.html',
  styleUrl: './production-planning.component.css'
})
export class ProductionPlanningComponent {
scrollTo(section: string) {
  const el = document.getElementById(section);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

}
