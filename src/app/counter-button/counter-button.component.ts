import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit, OnDestroy {
  @Input() count:number = 0;
  @Output() buttonClicked = new EventEmitter<void>();

  ngOnDestroy(): void {
    console.log('In ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('In ngOnInit');
  }

  onClick(): void{
    this.buttonClicked.emit();
  }
}
