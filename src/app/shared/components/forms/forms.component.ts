import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  @Input() login: boolean = false;
  @Input() register: boolean = false;
  constructor(private fb: FormBuilder) {}

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  //LOGIN FORM
  loginForm = this.fb.group({
    email: this.fb.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: this.fb.control('', Validators.required),
  });

  //REGISTER FORM
  registerForm = this.fb.group({
    name: this.fb.control('', Validators.required),
    email: this.fb.control(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    password: this.fb.control('', Validators.required),
  });

  submit() {
    console.log('logging in...');
  }

  ngOnInit(): void {}
}
