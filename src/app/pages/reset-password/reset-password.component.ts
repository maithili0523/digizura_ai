import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {

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

    const data = this.resetForm.value;

    this.http.post('http://localhost:5000/api/reset-password', data)
      .subscribe((res: any) => {

        Swal.fire({
          icon: 'success',
          text: 'Password updated successfully'
        }).then(() => {
          this.router.navigate(['/signin']);
        });

      }, error => {

        Swal.fire({
          icon: 'error',
          text: 'Failed to update password'
        });

      });

  }

}