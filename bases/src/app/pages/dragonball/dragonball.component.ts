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
  power = signal(50)

  error = signal(false)

  characters = signal<Character[]>([
    {id:1, name: "Goku", power: 9001},
    {id:2, name: "Veggeta", power: 7000},
    {id:3, name: "Piccolo", power: 5000},
    {id:4, name: "Yamcha", power: 500}
  ])

  addCharacter(){
    if (this.name() == '' || this.power() <= 0) {
      this.error.set(true)
      return;
    }

    this.error.set(false)

    this.characters.update(c => [...c, {id: this.characters().length + 1, name: this.name(), power: this.power() }])

    this.name.set("")
    this.power.set(0)
  }
}