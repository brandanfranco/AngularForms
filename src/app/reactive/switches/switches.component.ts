import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notifications: [true, Validators.required],
    conditions: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notifications: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, conditions: false });

    this.miFormulario.valueChanges.subscribe(({ conditions, ...rest }) => {
      this.persona = rest;
    });
  }

  save() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.conditions;
    this.persona = formValue;
    console.log(this.persona);
  }
}
