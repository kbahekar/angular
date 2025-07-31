import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-reactive-f',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-f.component.html',
  styleUrl: './reactive-f.component.css'
})
export class ReactiveFComponent {
  regitation :FormGroup
   

  constructor(private fb:FormBuilder){
    this.regitation = this.fb.group({
      name:['',Validators.required]
    })
  }
  onSubmit(){
    if(this.regitation.valid){
    console.log('this.regitation.value',this.regitation.value)
    }else{
        this.regitation.markAllAsTouched();
    }
    
  }
}
