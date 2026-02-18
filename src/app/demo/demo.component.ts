import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  demoForm: FormGroup;
  showForm = false;
  showSuccess = false;

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required]
    });
  }

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }

  submitDemo() {
    if (this.demoForm.valid) {
      console.log(this.demoForm.value);
      this.showForm = false;
      this.showSuccess = true;
      this.demoForm.reset();
    } else {
      this.demoForm.markAllAsTouched();
    }
  }

  closeSuccess() {
    this.showSuccess = false;
  }
}
