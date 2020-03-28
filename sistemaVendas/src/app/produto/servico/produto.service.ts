import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private urlAPI: string;
 
  //Chamada da API
  constructor(
    private http: HttpClient
  ) { 
    this.urlAPI = `${environment.baseUrl}/produto`
  }

  pesquisar(nome) {
    return this.http.get(`${this.urlAPI}/consultar/${nome}`);
  }

  incluir(produto: Produto) {
    return this.http.post(`${this.urlAPI}/incluir`, produto);
  }

  alterar(produto: Produto) {
    return this.http.patch(`${this.urlAPI}/alterarparcial`, produto);
  }

  remover(produto: Produto) {
    return this.http.post(`${this.urlAPI}/remover`, produto);
  }  
}
