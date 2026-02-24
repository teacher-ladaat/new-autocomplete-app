import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  name = input.required<string>();

  text = '';

  onSearch = output<string>({ alias: 'search' });

  onInput() {
    this.onSearch.emit(this.text);
  }
}
