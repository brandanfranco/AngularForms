import { Component, OnInit } from '@angular/core';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import {
  emailPattern,
  nameLastNameFormat,
  noStrider,
} from 'src/app/shared/validators/validation';
import { EmailValidationService } from 'src/app/shared/validators/email-validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [Validators.required, Validators.pattern(this.vs.nameLastNameFormat)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
        [this.emailValidators],
      ],
      username: ['', [Validators.required, this.vs.noStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [this.vs.equalPassword('password', 'password2')],
    }
  );

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorsService,
    private emailValidators: EmailValidationService
  ) {}

  ngOnInit(): void {
    this.myForm.reset({
      name: 'franco Brandan',
      email: 'test1@test.com',
      username: 'franco',
      password: '123456',
      password2: '123456',
    });
  }

  get errorMsg(): string {
    if (this.myForm.get('email')?.errors?.['required']) {
      return 'Email is required';
    } else if (this.myForm.get('email')?.errors?.['pattern']) {
      return 'Email is not valid';
    } else if (this.myForm.get('email')?.errors?.['emailTomado']) {
      return 'Email no available';
    }
    return '';
  }

  noValidate(campo: string) {
    return this.myForm.get(campo)?.errors && this.myForm.get(campo)?.touched;
  }

  submit() {
    console.log(this.myForm.value);

    this.myForm.markAllAsTouched();
  }
}
