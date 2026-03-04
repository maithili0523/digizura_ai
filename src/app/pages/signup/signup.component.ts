import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  signup(){

    if(this.signupForm.invalid) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    users.push(this.signupForm.value);

    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
  icon: 'success',
  text: 'Password updated successfully. Please sign in.',
  confirmButtonText: 'OK'
}).then(() => {
  this.router.navigate(['/signin']);
});

    this.router.navigate(['/signin']);

  }

}