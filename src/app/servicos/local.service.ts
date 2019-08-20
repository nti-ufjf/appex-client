import { FiltroPaciente } from './../modelos/filtro-paciente';
import { Injectable } from '@angular/core';
import { APP_API_APPEX } from './../app.api';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Local } from '../modelos/local.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private headers:   Headers = new Headers({ 'Content-Type': 'application/json' })
  private modeloUrl: string  = `${APP_API_APPEX}/locais`;

  constructor(private http: HttpClient) {
    console.log(this.modeloUrl);
  }

  public getModelos(): Observable<Local[]> {
    //acessa a api rest e retorna a lista de pessoas
    let retorno = this.http.get(this.modeloUrl) as Observable<Local[]>;
    return retorno;
  }

  public getModelo(id: String): Observable<Local> {
    let retorno = this.http.get(this.modeloUrl + "/" + id) as Observable<Local>;
    return retorno;
  }

  //==========================================   
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private trataErro(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }

  salvar(modelo: Local): Promise<Local> {
    if (modelo.id == 0) {
      console.log("Cadastrar Local");
      console.log(modelo);
      return this.cadastrar(modelo);
    } else {
      return this.atualizar(modelo);
    }
  }

  private cadastrar(modelo: Local) {
    if (modelo) {
      const url = `${this.modeloUrl}/`;
      console.log(this.modeloUrl);
      return this.http
        .post(url, JSON.stringify(modelo), httpOptions)
        .toPromise()
        .then((response: Response) => {
        })
        .catch(this.trataErro);
    } else {
      console.log("O objeto veio vazio");
    }
  }

  private atualizar(modelo: Local): Promise<Local> {
    const url = `${this.modeloUrl}/atualizar/${modelo.id}`;
    return this.http.put(url, modelo)
      .toPromise()
      .then(() => modelo as Local)
      .catch(this.trataErro);
  }

  delete(modelo: Local) {
    const url = `${this.modeloUrl}/remover/${modelo.id}`;
    return this.http.delete(url)
      .subscribe(() => {
        // EXIBIMOS UM AVISO INFORMANDO QUE O CADASTRO DO CLIENTE FOI APAGADO
        //this.thfNotification.warning('Cadastro do cliente apagado com sucesso.');
        console.log('Registro excluído com sucesso.');
      });
  }

}
