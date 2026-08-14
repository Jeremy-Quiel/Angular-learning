import { Component, signal } from "@angular/core";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: "./dragonball.component.html",
})
export class dragonballComponent{
  name = signal("Gohan")
  power = signal("50")

  characters = signal<Character[]>([
    {id:1, name: "Goku", power: 9001},
    {id:2, name: "Veggeta", power: 7000},
    {id:3, name: "Piccolo", power: 5000},
    {id:4, name: "Yamcha", power: 500}
  ])
}