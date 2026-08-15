import { signal } from "@angular/core";
import { Character } from "../../interfaces/Character.interface";

export let characters_db = signal<Character[]>([
  {id: 1, name: "Goku", power: 9001},
  {id: 2, name: "Vegetta", power: 8000}
])