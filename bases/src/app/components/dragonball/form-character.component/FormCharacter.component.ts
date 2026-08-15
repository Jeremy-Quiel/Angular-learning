import { Component, inject, output, signal} from '@angular/core';
import { Character } from '../../../interfaces/Character.interface';
import { DragonballService } from '../../../services/dragonball/Dragonball.service';

@Component({
  selector: 'dragonball-form-character',
  templateUrl: './FormCharacter.component.html',
})
export class FormCharacterComponent {
  public dragonballService = inject(DragonballService)

  name = signal("Jeremy")
  power = signal(10)

  error = signal(false)

  characters = this.dragonballService.characters

  stronger = output<Character>()

  addCharacter(){
    if (this.name() == '' || this.power() <= 0) {
      this.error.set(true)
      return;
    }

    this.error.set(false)

    let new_character: Character = {
      id: this.dragonballService.characters().length,
      name: this.name(),
      power: this.power()
    }

    this.dragonballService.addCharacter(new_character)

    this.name.set("")
    this.power.set(0)

    this.stronger.emit(this.get_goku())
  }

    private get_goku(){
    let goku: Character = {
      id: 100,
      name: "Goku SSJ Dios",
      power: 990000
    }
    return goku
  }
}