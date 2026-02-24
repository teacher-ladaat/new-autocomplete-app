import { Component, input } from '@angular/core';
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
}
