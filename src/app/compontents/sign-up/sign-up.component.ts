import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUPComponent {
  showAddPhoneButton: boolean = false;
  formgroup1:FormGroup;

  constructor(private router:Router, private formBuilder:FormBuilder, private authSer:AuthService,private userServ:UserService){
    this.formgroup1=this.formBuilder.group({
      fullName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[A-Za-z]{5,}')]),
      password:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      mobile:this.formBuilder.array([this.newdphone()]),
      address:this.formBuilder.array([])
    })

  }
  get fullName(){
    return this.formgroup1.get('fullName')
  }
  get email(){
    return this.formgroup1.get('email')
  }
  get password(){
    return this.formgroup1.get('password')
  }

  get address(){
    return this.formgroup1.get('address') as FormArray
  }
  get mobile(){
    return this.formgroup1.get('mobile') as FormArray
  }

  newAddress():FormGroup{
    return this.formBuilder.group({
      city:'',
      street:'',
      postalcode:''
    })
  }
  addAddress(){
    this.address.push(this.newAddress())
  }
  removeAddressInput(currentIndex:number){
    this.address.removeAt(currentIndex)

  }


  newdphone():FormGroup{
    return this.formBuilder.group({
      countrycode:'',
      phoneNumber:''
    })
  }

  addPhone(){
    this.mobile.push(this.newdphone())
  }
  removephoneInput(currentIndex:number){
    this.mobile.removeAt(currentIndex)
  }


  gotosignup(){
    this.router.navigate(['/login'])
   }
 
   addUser(){
     this.userServ.creatUser(this.formgroup1.value).subscribe({
       next:(data)=>{
         console.log(data);
         this.authSer.login('menna@gmail.com','172')
       }
     })
   }
}
