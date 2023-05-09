import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { login, signup } from '../contactmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit{
isshow=false;
signup(){
  this.isshow=true;
}
login(){
  this.isshow=false;
}
constructor(private formBuilder:FormBuilder,private http:HttpClient,
  private router:Router){}
signupform:FormGroup;
loginform:FormGroup;
ngOnInit(): void {
    this.signupform=this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
    //login
    this.loginform=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
}
SignUp(){
this.http.post<signup>("http://localhost:3000/signup",this.signupform.value).subscribe(re=>{
  alert("User Signup Successfully")
  this.signupform.reset();
})
}
Login(){
this.http.get<login[]>("http://localhost:3000/signup").subscribe(res=>{
  //matching email & password
  const user=res.find((a:any)=>{
    return a.email===this.loginform.value.email && a.password===this.loginform.value.password;
  })
  //check conditiom for login
  if(user){
    alert("Successfully Logged in");
    this.loginform.reset();
    this.router.navigate(["/contactlist"]);
    //storing data in local storage
    localStorage.setItem('logindata',JSON.stringify(user))
  }
  else{
    alert("User Not Found with these Credtentials");
    this.loginform.reset();

  }
},err=>{
  alert("Something Went Wrong Try After Sometime");
  this.loginform.reset();

})
}
}
