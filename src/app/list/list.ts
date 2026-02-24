import { Component, input } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  items = input.required<Item[]>();
}
