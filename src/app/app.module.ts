import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HeroesModule} from './heroes/heroes.module';
import {AuthModule} from './auth/auth.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // HOTO check routerconfig:
  // constructor(router: Router) {
    // const replacer = (k,v) => (typeof v === 'function') ? v.name : v;
    //
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  // }
}
