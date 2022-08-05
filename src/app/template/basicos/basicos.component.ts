import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  validProduct(): boolean {
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  validPrice(): boolean {
    return (
      this.miFormulario?.controls['precio']?.getError('null') &&
      this.miFormulario?.controls['precio']?.invalid &&
      this.miFormulario?.controls['precio']?.value < 0
    );
  }

  save() {
    console.log(this.miFormulario.controls);
  }
}
