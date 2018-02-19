import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

console.log('HEROES');
console.log(HEROES);

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    if(hero === this.selectedHero) {
      this.selectedHero = undefined;
    }
    else {
      this.selectedHero = hero;
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
