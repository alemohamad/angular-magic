import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MagicService } from '../../services/magic.service';
import { Set } from '../../services/interfaces';

@Component({
  selector: 'app-sets-list',
  templateUrl: './sets-list.component.html',
  styleUrls: ['./sets-list.component.scss']
})
export class SetsListComponent implements OnInit {

  public sets: Set[];

  constructor(
    private _magicService: MagicService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.loadData(params);
    });
  }

  loadData(params: any) {
    this._magicService.getSets(params).subscribe(
      data => {
        this.sets = data.sets;
      }
    );
  }

}
