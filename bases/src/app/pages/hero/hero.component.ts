import { Component, signal } from "@angular/core";

@Component({
  templateUrl: "./hero.component.html"
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

  capitalize(){
    return this.name().toUpperCase()
  }

}