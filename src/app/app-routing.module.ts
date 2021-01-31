import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent} from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LoginComponent} from './auth/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/heroes-dashboard', pathMatch: 'full'},
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
