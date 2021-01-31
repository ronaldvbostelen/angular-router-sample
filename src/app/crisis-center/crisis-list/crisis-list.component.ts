import { Component, OnInit } from '@angular/core';

import {CrisisService} from '../services/crisis.service';
import {Crisis} from '../../heroes/models/crisis';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises: Crisis[];
  selectedId: number;

  constructor(private crisisService: CrisisService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.crisisService.getCrises().subscribe((c: Crisis[]) => this.crises = c);
    this.route.paramMap.subscribe((params: ParamMap) =>
    this.selectedId = +params.get('id'));
  }

  add(name: string): void {
    if (!name) {
      return;
    }
    this.crisisService.addCrisis({name} as Crisis).subscribe(
      newCrisis => this.crises.push(newCrisis),
      err => console.log(err)
    );
  }

  delete(id: number): void {
    if (!id) {
      return;
    }

    this.crisisService.deleteCrisis(id).subscribe(
      deleted => this.crises = this.crises.filter(x => x.id !== id),
      err => console.log(err)
    );
  }

}
