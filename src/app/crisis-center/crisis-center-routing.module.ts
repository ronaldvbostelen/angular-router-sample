import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail/crisis-detail.component';
import {CrisisCenterHomeComponent} from './crisis-center-home/crisis-center-home.component';
import {CanDeactivateGuard} from '../guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: 'list', component: CrisisListComponent,
        children: [
          {path: ':id', component: CrisisDetailComponent, canDeactivate: [CanDeactivateGuard]},
          {path: '', component: CrisisCenterHomeComponent}
        ]
      },
      {
        path: ':id',
        component: CrisisDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
