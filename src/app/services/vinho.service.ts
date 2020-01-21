import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class VinhoService {
  public url = 'http://ivanamorim-com-br.umbler.net/api/vinho';

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<ProductModel[]>(`${this.url}/listaTodos`);
  }

  create(vinho: any) {
    return this.http.post(this.url + '/cadastro', vinho);
  };

  edit(vinho: any) {
    return this.http.post(this.url + '/cadastro', vinho);
  };

  desativar(vinho: any) {
    return this.http.post(this.url + '/delete', vinho);
  };

  delete(vinho: any) {
    return this.http.post(this.url + '/delete', vinho);
  };
}