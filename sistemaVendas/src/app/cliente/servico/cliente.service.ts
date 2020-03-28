import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlAPI: string;

  // Chamada da API
  constructor(
    private http: HttpClient,
  ) {
    this.urlAPI = `${environment.baseUrl}/cliente`
   }

  consultar(nome: string) {
    return this.http.get(`${this.urlAPI}/consultar/${nome}`);
  }

  incluir(cliente: Cliente) {
    return this.http.post(`${this.urlAPI}/incluir`, cliente);
  }

  alterar(cliente: Cliente) {
    return this.http.patch(`${this.urlAPI}/alterarparcial`, cliente);
  }

  remover(cliente: Cliente) {
    return this.http.post(`${this.urlAPI}/remover`, cliente);
  }

}
