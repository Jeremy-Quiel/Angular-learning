
import { Component, signal } from "@angular/core";

@Component({
  templateUrl: "./counter.component.html",
})
export class counterComponent{
  counter = 1;
  counterSignal = signal(1);

  // constructor(){
  //   setInterval(() => {
  //     this.counterSignal.update((v) => v + 1)
  //     console.log("tick")
  //   }, 1000);
  // }

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update((c) => c + value) // (c) => c + value QUIERE DECIR QUE "c" ES EL VALOR ACTUAL DE LA SIGNAL
  }

  reset(){
    this.counter = 1;
    this.counterSignal.set(1)
  }
}