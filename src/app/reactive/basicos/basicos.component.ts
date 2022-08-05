import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  // miFormulario: FormGroup = new FormGroup({
  //   name: new FormControl(' Dale Franco '),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // });

  miFormulario: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(1)]],
    existencias: [, [Validators.required, Validators.min(1)]],
  });

  constructor(private fb: FormBuilder) {}

  inputInvalid(input: string) {
    return (
      this.miFormulario.controls?.[input]?.errors &&
      this.miFormulario?.controls?.[input]?.touched
    );
  }
}
