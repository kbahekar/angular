import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent  {
  registrationForm: FormGroup;

  specializations = ['Engineering', 'Medicine', 'Law', 'Arts'];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      specialization: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      alert('Form Submitted:\n' + JSON.stringify(this.registrationForm.value, null, 2));
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}




