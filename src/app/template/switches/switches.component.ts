import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  person = {
    genero: '',
    notifications: true,
  };

  terminos: boolean = false;
}
