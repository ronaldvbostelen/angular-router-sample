import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import { ComposeMessageComponent} from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {SelectivePreloadingStrategyService} from './services/selective-preloading-strategy.service';

const routes: Routes = [
  {path: '', redirectTo: '/superheroes', pathMatch: 'full'},
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'admin', loadChildren:
      () => import('./admin/admin.module').then(m => m.AdminModule), canLoad: [AuthGuard]},
  {path: 'crisis-center', loadChildren:
      () => import('./crisis-center/crisis-center.module')
      .then(c => c.CrisisCenterModule), data: {preload: true}},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: SelectivePreloadingStrategyService})],
  exports: [RouterModule],
  providers: [SelectivePreloadingStrategyService]
})
export class AppRoutingModule { }
