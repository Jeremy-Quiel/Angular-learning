import { Component, input } from '@angular/core';

// Cuando se importa un interface se usar type para que sea mas rapido y por convencion
import type{ Character } from '../../../interfaces/Character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  
  // input() para poder traer datos del componente padre (.required() para que sea obligatorio)
  // el valor de character se paso por el selector donde se use en algun html (con [variable_name]='data')
  characters = input.required<Character[]>()
}