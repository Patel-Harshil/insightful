import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { AccountserviceService } from '../accountservice.service';
import { Accountinfo } from '../accountinfo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registration',
  standalone: true, //added
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AccountserviceService],
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  datasaved = false;
  message: string;
  constructor(
    private formbuilder: FormBuilder,
    private accountservice: AccountserviceService
  ) {}

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    let userinfo = this.regForm.value;
    console.log(userinfo);
    this.createuserAccount(userinfo);
    this.regForm.reset();
  }
  createuserAccount(accinfo: Accountinfo) {
    this.accountservice.createaccount(accinfo).subscribe((resResult) => {
      let resp = JSON.stringify(resResult);
      console.log(resp);
      this.datasaved = true;
      this.message = resResult['msg'];
      this.regForm.reset();
    });
  }
}
