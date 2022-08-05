import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favourites: Favourite[];
}

interface Favourite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  newGame: string = '';

  person: Person = {
    name: 'Franco',
    favourites: [
      {
        id: 1,
        name: 'juego 1',
      },
      {
        id: 2,
        name: 'juego 2',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  saveName() {}

  deleteItem(index: number): void {
    this.person.favourites.splice(index, 1);
  }

  addGame() {
    const nameGame: Favourite = {
      id: this.person.favourites.length + 1,
      name: this.newGame,
    };

    this.person.favourites.push({ ...nameGame });
    this.newGame = '';
  }
}
