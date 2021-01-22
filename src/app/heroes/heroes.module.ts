import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';

import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    HeroesListComponent,
    HeroDetailComponent,
    HeroSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
