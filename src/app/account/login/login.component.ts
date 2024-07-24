import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Userloginfo } from '../userloginfo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [Injectable, AccountserviceService],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  datasaved = false;
  message: string;
  status: string;

  constructor(
    private formbuilder: FormBuilder,
    private accountservice: AccountserviceService,
    private router: Router
  ) {
    const localStorage = document.defaultView?.localStorage;

    if (localStorage) {
      const loginuser = localStorage.getItem('loginuser');

      if (loginuser) {
        // localStorage.setItem('loginuser', (parseInt(loginuser) + 1).toString());
        router.navigate(['/']);
      }
      // else {
      //   localStorage.setItem('loginuser', '1');
      // }
    }
  }

  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    let userinfo = this.loginForm.value;
    this.userLogin(userinfo);
    this.loginForm.reset();
  }
  userLogin(logininfo: Userloginfo) {
    this.accountservice.userlogin(logininfo).subscribe((resResult) => {
      let resp = JSON.stringify(resResult);
      console.log(resp);
      this.datasaved = true;
      this.message = resResult['msg'];
      this.status = resResult['status'];
      if (resResult['status'] == 'success') {
        localStorage.setItem('Loginuser', resp);
        this.router.navigate(['/']);
      } else {
        localStorage.removeItem('Loginuser');
      }
      this.loginForm.reset();
    });
  }
}
