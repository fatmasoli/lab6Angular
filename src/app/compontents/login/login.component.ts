import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Iuser } from '../../models/iuser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule,FormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user:Iuser={} as Iuser

  formgroup2:FormGroup;

  constructor( private formBuilder:FormBuilder){
    this.formgroup2=this.formBuilder.group({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
    })

  }
  get email(){
    return this.formgroup2.get('email')
  }
  get password(){
    return this.formgroup2.get('password')
  }
}
