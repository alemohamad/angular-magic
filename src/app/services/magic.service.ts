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

  constructor(private httpClient: HttpClient) { }

  getCards(paramsArgument): Observable<CardsResponse> {
    let params = new HttpParams();
    params = params.set('pageSize', '30');

    for (var key in paramsArgument)
      params = params.set(key, paramsArgument[key]);

    return this.httpClient
      .get<CardsResponse>(`${this._baseUrl}/cards`, {
        params: params,
        responseType: 'json'
      })
      .pipe(shareReplay(1));
  }

  getSets(paramsArgument): Observable<SetsResponse> {
    let params = new HttpParams();
    params = params.set('pageSize', '30');

    for (var key in paramsArgument)
      params = params.set(key, paramsArgument[key]);

    return this.httpClient
      .get<SetsResponse>(`${this._baseUrl}/sets`, {
        params: params,
        responseType: 'json'
      })
      .pipe(shareReplay(1));
  }
}
