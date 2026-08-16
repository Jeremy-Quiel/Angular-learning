import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>([
  {id: 1, name: "Goku", power: 9001},
  {id: 2, name: "Vegetta", power: 8000}
  ])

  saveToLocaleStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter(character: Character){
    this.characters.update(c => [...c, character])
  } 
  
}