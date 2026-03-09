import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {

    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

  }

  /* ================= LOGIN ================= */

  onSubmit() {

    if (this.signinForm.invalid) return;

    const user = this.signinForm.value;

    this.http.post('http://localhost:5000/api/signin', user)
      .subscribe((res: any) => {

        if (res.message === "Invalid email or password") {

          Swal.fire({
            icon: 'error',
            text: 'Invalid email or password'
          });

          return;
        }

        // ⭐ Save login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', user.email);

        Swal.fire({
  icon: 'success',
  text: 'Login successful'
}).then(() => {

  this.router.navigateByUrl('/dashboard');

});

      }, error => {

        Swal.fire({
          icon: 'error',
          text: 'Server error. Please try again.'
        });

      });

  }

  /* ================= RESET PASSWORD ================= */

  resetPassword() {

    Swal.fire({
      title: 'Enter your registered email',
      input: 'email',
      inputPlaceholder: 'Enter your email',
      confirmButtonText: 'Next',
      showCancelButton: true
    }).then((emailResult) => {

      if (!emailResult.value) return;

      Swal.fire({
        title: 'Enter new password',
        input: 'password',
        inputPlaceholder: 'New password',
        confirmButtonText: 'Update'
      }).then((passResult) => {

        if (!passResult.value) {

          Swal.fire({
            icon: 'error',
            text: 'Password cannot be empty'
          });

          return;
        }

        this.http.post('http://localhost:5000/api/reset-password', {
          email: emailResult.value,
          password: passResult.value
        }).subscribe((res: any) => {

          Swal.fire({
            icon: 'success',
            text: 'Password updated successfully. Please sign in.'
          });

        }, error => {

          Swal.fire({
            icon: 'error',
            text: 'Failed to update password'
          });

        });

      });

    });

  }

}