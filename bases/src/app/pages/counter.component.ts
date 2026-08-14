
import { Component } from "@angular/core";

@Component({
  templateUrl: "./counter.component.html"
})
export class counterComponent{
  counter = 1;

  increaseBy(value: number){
    this.counter += value
  }

  reset(){
    this.counter = 1
  }
}