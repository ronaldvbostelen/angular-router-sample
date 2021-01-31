import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Crisis} from '../../heroes/models/crisis';
import {EMPTY, Observable, of} from 'rxjs';
import {CrisisService} from '../services/crisis.service';
import {mergeMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisDetailResolverService implements Resolve<Crisis>{

  constructor(private crisisService: CrisisService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Promise<Crisis> | Crisis {
    const id = +route.paramMap.get('id');

    return this.crisisService.getCrisis(id).pipe(
      take(1),
      mergeMap(c => {
        if (c){
          return of(c);
        }else {
          this.router.navigate(['/crisis-center/list']);
          return EMPTY;
        }
      })
    );
  }
}
