import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';   //


@Component({
  selector: 'app-cable-ai',
  standalone: true,
 
  imports: [
    CommonModule,
    RouterModule,        
    LucideAngularModule
  ],
  templateUrl: './cable-ai.component.html',
  styleUrl: './cable-ai.component.css'
})
export class CableAiComponent {

}
