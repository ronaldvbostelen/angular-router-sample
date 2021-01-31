import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ManageCrisesComponent} from './manage-crises/manage-crises.component';
import {ManageHeroComponent} from './manage-hero/manage-hero.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AuthGuard} from '../auth/auth.guard';



const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {path: 'crises', component: ManageCrisesComponent},
          {path: 'heroes', component: ManageHeroComponent},
          {path: '', component: AdminDashboardComponent}
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
