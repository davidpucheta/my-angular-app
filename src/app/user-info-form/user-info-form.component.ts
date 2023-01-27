import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css']
})
export class UserInfoFormComponent {
  name: string ='';
  age: string ='';
  hairColor: string ='';

  displayValues(): void{
    alert(`Name: ${this.name}, Age: ${this.age}, Hair Color: ${this.hairColor}`);
  }

}
