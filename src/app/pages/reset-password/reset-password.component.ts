import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  resetPassword() {

    if (this.resetForm.invalid) {
      Swal.fire({
        icon: 'warning',
        text: 'Please enter a valid email and password'
      });
      return;
    }

    const { email, password } = this.resetForm.value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((u: any) => u.email === email);

    if (!user) {
      Swal.fire({
        icon: 'error',
        text: 'Email not found. Please sign up first.'
      });
      return;
    }

    user.password = password;

    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
      icon: 'success',
      text: 'Password updated successfully'
    }).then(() => {
      this.router.navigate(['/signin']);
    });

  }

}