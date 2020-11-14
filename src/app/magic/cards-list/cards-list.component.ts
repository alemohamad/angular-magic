import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MagicService } from '../../services/magic.service';
import { Card } from '../../services/interfaces';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  public cards: Card[];

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
    this._magicService.getCards(params).subscribe(
      data => {
        this.cards = data.cards;
      }
    );
  }

}
