import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
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

  constructor(private fb: FormBuilder, private router: Router) {

    this.signinForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });

  }

  // ================= LOGIN =================

  onSubmit(){

    if(this.signinForm.invalid) return;

    const { email, password } = this.signinForm.value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((u:any) => u.email === email);

    if(!user){
      Swal.fire({
        icon:'warning',
        text:'Please sign up before signing in'
      });
      return;
    }

    if(user.password !== password){
      Swal.fire({
        icon:'error',
        text:'Invalid password'
      });
      return;
    }

    localStorage.setItem('isLoggedIn','true');
    localStorage.setItem('userEmail', email);

    Swal.fire({
      icon:'success',
      text:'Login successful'
    }).then(()=>{
      this.router.navigate(['/dashboard']);
    });

  }

  // ================= RESET PASSWORD =================

  resetPassword(){

    Swal.fire({
      title: 'Enter your registered email',
      input: 'email',
      inputPlaceholder: 'Enter your email',
      confirmButtonText: 'Next',
      showCancelButton: true
    }).then((emailResult)=>{

      if(!emailResult.value) return;

      const users = JSON.parse(localStorage.getItem('users') || '[]');

      const user = users.find((u:any)=>u.email === emailResult.value);

      if(!user){
        Swal.fire({
          icon:'error',
          text:'Email not found. Please sign up first.'
        });
        return;
      }

      Swal.fire({
        title:'Enter new password',
        input:'password',
        inputPlaceholder:'New password',
        confirmButtonText:'Update'
      }).then((passResult)=>{

        if(!passResult.value){
          Swal.fire({
            icon:'error',
            text:'Password cannot be empty'
          });
          return;
        }

        user.password = passResult.value;

        localStorage.setItem('users', JSON.stringify(users));

        Swal.fire({
          icon:'success',
          text:'Password updated successfully. Please sign in.'
        });

      });

    });

  }

}