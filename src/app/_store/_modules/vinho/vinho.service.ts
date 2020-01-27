import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VinhoService {
  public url = 'http://ivanamorim-com-br.umbler.net/api/vinho';

  constructor(
    private http: HttpClient
  ) { }

  edit(vinho: any) {
    return this.http.post(this.url + '/cadastro', vinho);
  };

  desativar(vinho: any) {
    return this.http.post(this.url + '/desativar', vinho);
  };

}