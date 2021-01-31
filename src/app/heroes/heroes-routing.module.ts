import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'heroes-list', component: HeroesComponent},
  {path: 'heroes-dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
