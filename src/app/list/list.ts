import { Component, input } from '@angular/core';
import { Item } from '../shared/item';
import { ListItem } from "../list-item/list-item";

@Component({
  selector: 'app-list',
  imports: [ListItem],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  items = input.required<Item[]>();
}
