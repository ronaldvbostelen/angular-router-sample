import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { CrisisCenterComponent} from './crisis-center/crisis-center.component';
import { CrisisListComponent} from './crisis-list/crisis-list.component';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CrisisCenterRoutingModule,
  ],
})
export class CrisisCenterModule { }

