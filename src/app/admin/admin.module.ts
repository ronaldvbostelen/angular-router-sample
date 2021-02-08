import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectivePreloadingStrategyService} from '../services/selective-preloading-strategy.service';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroComponent } from './manage-hero/manage-hero.component';

import { AdminRoutingModule} from './admin-routing.module';


@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ManageCrisesComponent, ManageHeroComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
