import { Component, input, model, OnInit } from '@angular/core';
import { Input } from '../input/input';
import { List } from '../list/list';
import { Item } from '../shared/item';

@Component({
  selector: 'app-autocomplete',
  imports: [Input, List],
  templateUrl: './autocomplete.html',
  styleUrl: './autocomplete.scss',
})
export class Autocomplete implements OnInit {
  inputName = input.required<string>();
  value = model<string>('', { alias: 'value' });

  list = input.required<Item[]>();
  filteredList: Item[] = [];

  bgColor = input<string>('lightblue');

  ngOnInit(): void {
    this.filteredList = this.list();
  }

  searchInList(text: string) {
    this.value.set(text);
    this.filteredList = this.list().filter((el) =>
      el.title.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
