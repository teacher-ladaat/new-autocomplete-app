import { Component, input } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.html',
  styleUrl: './list-item.scss',
})
export class ListItem {
    item = input.required<Item>();
}
