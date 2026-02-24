import { Component } from '@angular/core';
import { List } from './list/list';
import { Item } from './shared/item';
import { Autocomplete } from "./autocomplete/autocomplete";

@Component({
  selector: 'app-root',
  imports: [List, Autocomplete],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  colors: Item[] = [
    new Item('red'),
    new Item('green'),
    new Item('blue'),
    new Item('yellow'),
    new Item('pink'),
  ];

  cities: Item[] = [
    { id: 100, title: 'Jerusalem' },
    { id: 110, title: 'Elad' },
    { id: 120, title: 'Tel Aviv' },
  ];
}
