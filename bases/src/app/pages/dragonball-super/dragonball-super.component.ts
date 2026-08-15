import { Component, input, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list.component/character-list.component";
import { FormCharacterComponent } from "../../components/dragonball/form-character.component/form-character.component";
import { characters_db } from "../../controller/dragonball/characters.controller";

@Component({
  selector: "dragonball-super",
  templateUrl: "./dragonball-super.component.html",
  imports: [CharacterListComponent, FormCharacterComponent], // se importan los componentes
})
export class dragonballSuperComponent{
  name = signal("")
  power = signal(0)

  error = signal(false)

  characters = characters_db
}