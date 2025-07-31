import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templete-driven',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './templete-driven.component.html',
  styleUrl: './templete-driven.component.css'
})
export class TempleteDrivenComponent {

formData = {
    name: '',
    gender: '',
    specialization: '',
    terms: false
  };

  specializations = ['Engineering', 'Medicine', 'Law', 'Arts'];

  onSubmit(form: any) {
    if (form.valid) {
      alert('Form submitted:\n' + JSON.stringify(this.formData, null, 2));
    } else {
      alert('Please complete the form before submitting.');
    }
  }
}
