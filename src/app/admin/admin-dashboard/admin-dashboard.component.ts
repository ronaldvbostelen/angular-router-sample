import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {SelectivePreloadingStrategyService} from '../../services/selective-preloading-strategy.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;

  constructor(private  route: ActivatedRoute,
              public loadStrat: SelectivePreloadingStrategyService) { }

  ngOnInit(): void {
    this.sessionId = this.route
      .queryParamMap
      .pipe(map(params => params.get('session_id') || 'None'));

    this.token = this.route.fragment.pipe(map(fragment => fragment || 'None'));

    this.sessionId.subscribe(x => console.log(x));
    this.token.subscribe(x => console.log(x));
  }

}
