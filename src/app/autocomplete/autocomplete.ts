import { Component, input } from '@angular/core';
import { Input } from '../input/input';
import { List } from '../list/list';
import { Item } from '../shared/item';

@Component({
  selector: 'app-autocomplete',
  imports: [Input, List],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss',
})
export class Autocomplete {
  inputName = input.required<string>();
  list = input.required<Item[]>();
  bgColor = input<string>('lightblue');
}
