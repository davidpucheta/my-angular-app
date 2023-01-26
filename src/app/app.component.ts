import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  count:number = 0;
  threshold:number = 10;

  doSomething(): void{
    alert('Doing something...');
  }

  doSomethingElse(): void{
    alert('Doing something else...');
  }

  doAnotherThing(): void{
    alert('Doing another thing...');
  }

  incrementCount(): void{
    this.count += 1;
  }
}
