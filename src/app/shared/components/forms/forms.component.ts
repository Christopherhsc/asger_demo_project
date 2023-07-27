import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  @Input() login: boolean = false;
  @Input() email: boolean = false;
  @Input() name: boolean = false;
  @Input() password: boolean = false;
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
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
