import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-congratulations-message',
  templateUrl: './congratulations-message.component.html',
  styleUrls: ['./congratulations-message.component.css']
})
export class CongratulationsMessageComponent {
  @Input() count = 0;
  @Input() threshold = 10;
}
