import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:any={
    username:"",
    email:"",
    password:""
  }

  constructor(public fb:FormBuilder, public auth:AuthService,public router:Router) { }

  ngOnInit(): void {
  }

  signupForm= this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })

  adduser(){
    console.log(this.user)
    this.auth.addusers(this.user)
        this.router.navigate(['/login'])
   
}

}
