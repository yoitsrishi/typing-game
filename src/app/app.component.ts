import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text = '';
  title = 'typing';
  randomText = lorem.sentence();
  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const inputText = target.value;
    // if (!inputText) {
    //   this.text = inputText;
    // } else {
    //   this.text = '';
    // }
    this.text = inputText;
  }
  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) return 'pending';
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
