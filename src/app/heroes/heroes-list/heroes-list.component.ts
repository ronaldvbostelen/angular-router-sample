import { Component, OnInit } from '@angular/core';

import {HeroService} from '../services/hero.service';
import { MessageService } from '../../../services/message.service';

import { Hero } from '../models/hero';


@Component({
  selector: 'app-hero-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(x => this.heroes = x);
  }

  add(name: string): void{
    name = name.trim();
    if (!name){return; }
    this.heroService.addHero({name} as Hero)
      .subscribe(h => {
        this.heroes.push(h);
      });
  }

  delete(id: number): void{
    this.heroService.deleteHero(id)
      .subscribe(() => {
        this.heroes = this.heroes.filter(x => x.id !== id);
      });
  }
}
