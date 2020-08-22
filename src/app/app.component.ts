import { Component } from '@angular/core';
import { style, animate, trigger, transition } from '@angular/animations';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('1s ease-out', style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('1s ease-in', style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent  {
  elements = [
    { value: 1, background: 'green' },
        { value: 1, background: 'red' },
            { value: 1, background: 'green' },
    { value: 2, background: 'red' },
    { value: 3, background: 'blue' },
    { value: 4, background: 'yellow' },
    { value: 5, background: 'pink' }
  ]

  add() {
    this.elements.splice(2, 0, { value: 1, background: 'violet' });
  }
}
