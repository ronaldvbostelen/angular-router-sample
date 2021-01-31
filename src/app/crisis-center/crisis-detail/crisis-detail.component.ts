import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {Crisis} from '../../heroes/models/crisis';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CrisisService} from '../services/crisis.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;
  crisis: Crisis;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private crisesService: CrisisService) { }

  ngOnInit(): void {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.crisesService.getCrisis(+params.get('id')))
    );

    this.crisis$.subscribe(x => this.setCrisis(x), error => console.log(error));
  }

  private setCrisis(crisis: Crisis): void {
    if (!crisis) {
      return;
    }

    this.crisis = crisis;
  }

  save(): void{
    this.crisesService.updateCrisis(this.crisis).subscribe();
  }

  goBack(): void{
    this.router.navigate(['../', { id: this.crisis.id }], { relativeTo: this.route });
  }
}
