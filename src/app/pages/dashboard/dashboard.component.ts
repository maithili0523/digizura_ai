import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any = {
    name: '',
    email: '',
    location: 'Bengaluru, India'
  };

  ngOnInit() {

    const loggedUser = localStorage.getItem('user');

    if (loggedUser) {
      this.user = JSON.parse(loggedUser);
    }

  }

}