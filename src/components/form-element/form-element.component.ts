import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl} from '@angular/forms';

interface dataForm {
  name: string;
  surname: string;
  email: string;
  phone: number;
  birthday: Date;
  city: string;
  address: string;
}

@Component({
  selector: 'app-form-element',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-element.component.html',
  styleUrl: './form-element.component.scss'
})
export class FormElementComponent {
  title: string;
  dataForm: FormGroup;

  constructor(private fb : FormBuilder) {
    this.title = 'Form Element';
    this.dataForm  = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern(/^[0-9]{9}$/)],
      birthday: ['', [Validators.required, this.validDateValidator]],
      city: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.dataForm.value);
    this.dataForm.reset();
  }

  validDateValidator(control: FormControl) {
  const value = control.value;
  const date = new Date(value);
  const isValid = !isNaN(date.getTime());

  return isValid ? null : { invalidDate: true };
}
}
