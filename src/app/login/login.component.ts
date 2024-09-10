import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  signupUsers: any[] = [];
  signupObj:any = {
    fullName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  };

  constructor(private router:Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('ssignUpUsers');
    if(localData !=null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      fullName: '',
      email: '',
      password: ''
    };
  }

  onLogin(){
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if(isUserExist != undefined) {
      alert('Login Successfully!')
      this.router.navigate(['/Home'])
    }else {
      alert('Incorrect Credentials')
    }
  }
}
