import { Component, Input } from '@angular/core';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-tip-section',
  templateUrl: './tip-section.component.html',
  styleUrls: ['./tip-section.component.css']
})
export class TipSectionComponent {
  @Input() content = "";
  exclamationPointIcon = faExclamationCircle;
}
