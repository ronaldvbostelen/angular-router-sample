import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'heroes-list', component: HeroesComponent},
  {path: 'detail/:id', redirectTo: 'superheroes/detail/:id'},
  {path: 'heroes-dashboard', redirectTo: '/superheroes'},
  {
    path: 'superheroes', component: DashboardComponent,
    children: [
      {path: 'detail/:id', component: HeroDetailComponent}
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
