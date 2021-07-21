import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cuisine } from '../models/cuisine';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {
  private url: string = 'https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json';
  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<Array<Cuisine>> {
    return this.httpClient.get<Array<Cuisine>>(this.url);
  }
}
