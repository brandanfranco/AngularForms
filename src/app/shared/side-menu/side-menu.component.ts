import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SideMenuComponent implements OnInit {
  templateMenu: MenuItem[] = [
    {
      text: 'Basicos',
      route: './template/basicos',
    },
    {
      text: 'Dinamicos',
      route: './template/dinamicos',
    },
    {
      text: 'Switches',
      route: './template/switches',
    },
  ];

  templateMenuReactive: MenuItem[] = [
    {
      text: 'Basicos',
      route: './reactive/basicos',
    },
    {
      text: 'Dinamicos',
      route: './reactive/dinamicos',
    },
    {
      text: 'Switches',
      route: './reactive/switches',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
