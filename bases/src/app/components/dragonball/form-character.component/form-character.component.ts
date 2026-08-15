import { Component, signal} from '@angular/core';
import { characters_db } from '../../../controller/dragonball/characters.controller';

@Component({
  selector: 'dragonball-form-character',
  templateUrl: './form-character.component.html',
})
export class FormCharacterComponent {
  name = signal("Jeremy")
  power = signal(10)

  error = signal(false)

  characters = characters_db

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