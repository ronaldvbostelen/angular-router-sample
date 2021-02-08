import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../services/hero.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.heroService.getHero(+params.get('id')).subscribe(h => this.hero = h);
        return of(params);
      })).subscribe();
  }

  goBack(): void{
  this.location.back();
  }

  save(): void{
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
