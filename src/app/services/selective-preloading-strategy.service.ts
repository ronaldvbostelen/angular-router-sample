import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService implements PreloadingStrategy{
  preloadedModules: string[] = [];

  constructor() { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data.preload){
      this.preloadedModules.push(route.path);

      console.log('Preload : ' + route.path);

      return fn();
    }else{
      return of(null);
    }
  }
}
