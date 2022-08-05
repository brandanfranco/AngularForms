import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favourite: this.fb.array([['juego 1'], ['juego 2']], Validators.required),
  });

  newFavorite: FormControl = this.fb.control('', Validators.required);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get favouriteArr() {
    return this.miFormulario.get('favourite') as FormArray;
  }

  required(input: string) {
    return (
      this.miFormulario.controls[input].errors &&
      this.miFormulario.controls[input].touched
    );
  }

  save() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
  }

  addNewFavorite() {
    if (this.newFavorite.invalid) {
      return;
    }

    this.favouriteArr.push(
      new FormControl(this.newFavorite.value, Validators.required)
    );

    this.newFavorite.reset();
  }

  deleteFavorite(index: number): void {
    this.favouriteArr.removeAt(index);
  }
}
