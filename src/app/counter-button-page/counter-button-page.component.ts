import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter-button-page',
  templateUrl: './counter-button-page.component.html',
  styleUrls: ['./counter-button-page.component.css']
})
export class CounterButtonPageComponent {
  count:number = 0;
  threshold:number = 5;
  showCounterButton:boolean = true;

  constructor(private router: Router ) {

  }

  incrementCount(): void{
    this.count += 1;

    if (this.count > 15) {
      this.router.navigateByUrl('/event-handling');
    }
  }

  toggleCounterButton(): void{
    this.showCounterButton = !this.showCounterButton;
  }
}
