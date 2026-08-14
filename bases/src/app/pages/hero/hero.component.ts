import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: "./hero.component.html",
  styles:   `
  dd {
    font-weight: 900;
  }
  `,
  imports: [UpperCasePipe]
})
export class heroComponent{
  name = signal("Iron-Man");
  age = signal(45);

  getHeroDescription(){
    return "Name: " + this.name() + " - Age: " + this.age();
  }

  changeHero(){
    this.name.set("Spider-Man");
    this.age.set(22);
  }

  resetForm(name: string, age: number){
    this.name.set(name)
    this.age.set(age);
  }

  changeAge(age: number){
    this.age.set(age)
  }

  capitalize = computed(() => {
    return this.name().toUpperCase()
  });

}