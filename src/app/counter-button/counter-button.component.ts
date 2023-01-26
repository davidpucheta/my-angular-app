import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {
  @Input() count:number = 0;
  @Output() buttonClicked = new EventEmitter<void>();

  onClick(): void{
    this.buttonClicked.emit();
  }
}
