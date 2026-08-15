import { Component, input, output, Signal, signal, WritableSignal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list.component/character-list.component";
import { Character } from "../../interfaces/Character.interface";
import { FormCharacterComponent } from "../../components/dragonball/form-character.component/form-character.component";
import { characters_db } from "../../controller/dragonball/characters.controller";

@Component({
  selector: "dragonball-super",
  templateUrl: "./dragonball-super.component.html",
  imports: [CharacterListComponent, FormCharacterComponent], // se importan los componentes
})
export class dragonballSuperComponent{
  characters = characters_db
  stronger: WritableSignal<Character> = signal({id:0, name: "", power: 0})

  set_stronger(stronger: Character) { this.stronger = signal(stronger)}
}