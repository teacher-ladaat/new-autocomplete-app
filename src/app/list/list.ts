import { Component } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  items: Item[] = [
    new Item('red'),
    new Item('green'),
    new Item('blue'),
    new Item('yellow'),
    new Item('pink'),
  ];
}
