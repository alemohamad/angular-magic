import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { CardsResponse, SetsResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MagicService {

  private _baseUrl: string = "https://api.magicthegathering.io/v1";

  private cards$: Observable<CardsResponse>;
  private sets$: Observable<SetsResponse>;

  constructor(private httpClient: HttpClient) { }

  getCards(paramsArgument): Observable<CardsResponse> {
    if (!this.cards$) {
      let params = new HttpParams();
      params = params.set('pageSize', '30');

      this.cards$ = this.httpClient
        .get<CardsResponse>(`${this._baseUrl}/cards`, {
          params: params,
          responseType: 'json'
        })
        .pipe(shareReplay(1));
    }
    return this.cards$;
  }

  getSets(paramsArgument): Observable<SetsResponse> {
    if (!this.sets$) {
      let params = new HttpParams();
      params = params.set('pageSize', '30');

      this.sets$ = this.httpClient
        .get<SetsResponse>(`${this._baseUrl}/sets`, {
          params: params,
          responseType: 'json'
        })
        .pipe(shareReplay(1));
    }
    return this.sets$;
  }
}
