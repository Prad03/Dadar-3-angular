import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { commonPasswordValidator } from '../../validators/Validators';

@Component({
  selector: 'app-form-handling2',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-handling2.component.html',
  styleUrl: './form-handling2.component.css'
})
export class FormHandling2Component {
  
  // Reactive forms
  
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder)
  {
      this.form=this.formBuilder.group({
        email:["xyz@gmail.com",[Validators.required,Validators.email]],
        password:["1234",[Validators.required,Validators.minLength(6),commonPasswordValidator]]
      })
  }

  onSubmit()
  {
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.form.get('email')?.hasError('required'))
    console.log(this.form.get('email')?.hasError('email'))
    
  }

  setValues()
  {
    this.form.setValue({
      email:"pqr@gmail.com",
      password:"User@123"
    })
  }

}
