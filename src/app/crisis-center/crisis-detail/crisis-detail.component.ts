import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

import {Crisis} from '../../heroes/models/crisis';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CrisisService} from '../services/crisis.service';
import {switchMap} from 'rxjs/operators';
import {DialogService} from '../../services/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis;
  editName: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private crisesService: CrisisService,
              public dialogService: DialogService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: {crisis: Crisis}) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });
  }

  save(): void{
    this.crisis.name = this.editName;
    this.crisesService.updateCrisis(this.crisis).subscribe();
  }

  goBack(): void{
    this.router.navigate(['../', { id: this.crisis.id }], { relativeTo: this.route });
  }
}
