import { Component, OnInit } from '@angular/core';
import {CrisisService} from '../services/crisis.service';

import {Crisis} from '../../heroes/models/crisis';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.css']
})
export class CrisisCenterComponent implements OnInit {
  crises: Crisis[];

  constructor(private crisesService: CrisisService) { }

  ngOnInit(): void {
    this.crisesService.getCrises().subscribe((x: Crisis[]) => {
       this.crises = x.slice(0, 4);
    });
  }

}
