import { Component, inject, signal, WritableSignal } from "@angular/core";
import { Character } from "../../interfaces/Character.interface";
import { DragonballService } from "../../services/dragonball/Dragonball.service";
import { FormCharacterComponent } from "../../components/dragonball/form-character.component/FormCharacter.component";
import { CharacterListComponent } from "../../components/dragonball/character-list.component/Character-list.component";

@Component({
  selector: "dragonball-super",
  templateUrl: "./Dragonball-Super.component.html",
  imports: [CharacterListComponent, FormCharacterComponent], // se importan los componentes
})
export class DragonballSuperComponent{
  public dragonballService = inject(DragonballService) // importar service por inyeccion

  characters = this.dragonballService.characters

  stronger: WritableSignal<Character> = signal({id:0, name: "", power: 0})

  set_stronger(stronger: Character) { this.stronger = signal(stronger)}
}