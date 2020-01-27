import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public url = 'http://ivanamorim-com-br.umbler.net/api/vinho';

  constructor(
    private http: HttpClient
  ) { }

}