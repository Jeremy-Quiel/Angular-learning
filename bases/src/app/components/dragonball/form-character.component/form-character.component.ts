import { Component, output, signal} from '@angular/core';
import { characters_db } from '../../../controller/dragonball/characters.controller';
import { Character } from '../../../interfaces/Character.interface';

@Component({
  selector: 'dragonball-form-character',
  templateUrl: './form-character.component.html',
})
export class FormCharacterComponent {
  name = signal("Jeremy")
  power = signal(10)

  error = signal(false)

  characters = characters_db

  stronger = output<Character>()

  addCharacter(){
    if (this.name() == '' || this.power() <= 0) {
      this.error.set(true)
      return;
    }

    this.error.set(false)

    this.characters.update(c => [...c, {id: this.characters().length + 1, name: this.name(), power: this.power() }])

    this.name.set("")
    this.power.set(0)

    this.stronger.emit(this.get_goku())
  }

    private get_goku(){
    let goku: Character = {
      id: 100,
      name: "Goku SSJ Dios",
      power: 999999999999999
    }
    return goku
  }
}