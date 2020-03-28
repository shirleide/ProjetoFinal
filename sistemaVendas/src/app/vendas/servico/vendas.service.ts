import { Vendas } from './vendas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private urlAPI: string;

  //Chamada da API
  constructor(
    private http: HttpClient
  ) {
    this.urlAPI = `${environment.baseUrl}/venda`
  }

  consultar(codigoCliente: string) {
    return this.http.get(`${this.urlAPI}/consultar/${codigoCliente}`);
  }

  incluir(vendas: Vendas) {
    return this.http.post(`${this.urlAPI}/incluir`, vendas);
  }

  // Não é utilizado
  // alterar(vendas: Vendas) {
  //   return this.http.patch(`${this.urlAPI}/alterarparcial`, vendas);
  // }

  remover(vendas: Vendas) {
    return this.http.post(`${this.urlAPI}/remover`, vendas);
  }

}
