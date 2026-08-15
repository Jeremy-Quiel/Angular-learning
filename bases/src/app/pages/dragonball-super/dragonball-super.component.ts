import { Component, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list.component/character-list.component";
import { Character } from "../../interfaces/Character.interface";

@Component({
  templateUrl: "./dragonball-super.component.html",
  imports: [CharacterListComponent], // se importan los componentes
})
export class dragonballSuperComponent{
  name = signal("")
  power = signal(0)

  error = signal(false)

  x = signal<number[]>([
    10, 30, 999, 777
  ])

  characters = signal<Character[]>([
    {id:1, name: "Goku", power: 9001},
    {id:2, name: "Veggeta", power: 7000}
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