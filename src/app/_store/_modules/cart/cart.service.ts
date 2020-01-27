import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VinhoState } from "../../vinho-store.module";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public url = 'http://ivanamorim-com-br.umbler.net/api/vinho';

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<VinhoState[]>(`${this.url}/listaTodos`);
  }

  create(vinho: any) {
    return this.http.post(this.url + '/cadastro', vinho);
  };

  edit(vinho: any) {
    return this.http.post(this.url + '/cadastro', vinho);
  };

  desativar(vinho: any) {
    return this.http.post(this.url + '/desativar', vinho);
  };

  delete(vinho: any) {
    return this.http.post(this.url + '/delete', vinho);
  };
}