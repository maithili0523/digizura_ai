import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {

    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  signup() {

    if (this.signupForm.invalid) return;

    const user = this.signupForm.value;

    this.http.post('http://localhost:5000/api/signup', user)
      .subscribe((res: any) => {

        if (res.message === "User already exists") {

          Swal.fire({
            icon: 'warning',
            text: 'User already exists. Please sign in.'
          });

          return;
        }

        Swal.fire({
          icon: 'success',
          text: 'Account created successfully. Please sign in.'
        }).then(() => {
          this.router.navigate(['/signin']);
        });

      }, error => {

        Swal.fire({
          icon: 'error',
          text: 'Server error. Please try again.'
        });

      });

  }

}