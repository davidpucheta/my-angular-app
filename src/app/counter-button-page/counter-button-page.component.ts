import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-button-page',
  templateUrl: './counter-button-page.component.html',
  styleUrls: ['./counter-button-page.component.css']
})
export class CounterButtonPageComponent {
  count:number = 0;
  threshold:number = 10;
  showCounterButton:boolean = true;

  incrementCount(): void{
    this.count += 1;
  }

  toggleCounterButton(): void{
    this.showCounterButton = !this.showCounterButton;
  }
}
