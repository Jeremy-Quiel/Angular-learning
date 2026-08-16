import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

function loadLocalStorage(){
  const characters = localStorage.getItem("characters")

  return characters ? JSON.parse(characters) : []
}

@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>(loadLocalStorage())

  saveToLocaleStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()))
  })

  addCharacter(character: Character){
    this.characters.update(c => [...c, character])
  } 
  
}