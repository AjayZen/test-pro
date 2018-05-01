import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app test';
arr=[1,2,3];
  constructor(){
this.title=this.title.slice(2,4);

this.arr.push(4);
  }
  AddValue(){

    this.arr.push(5);
  }
//   testMethod()
// {
//   this.title
//   this.ajay
// }
}
