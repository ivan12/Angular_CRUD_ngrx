import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VinhoState } from "../../vinho-store.module";
import {map} from "rxjs/operators";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinhoService {
  public url = 'http://ivanamorim-com-br.umbler.net/api/vinho';

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    return this.http.get<VinhoState[]>(`${this.url}/listaTodos`)
        .pipe(
          map(r => {
            console.log(r)
            return r
          })
        )
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