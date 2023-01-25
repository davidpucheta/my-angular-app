import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.css']
})
export class EventHandlingComponent {
  message = "I'm a component!";

  doSomething(message: string): void{
    alert('The button says: ' + message);
  }

}
