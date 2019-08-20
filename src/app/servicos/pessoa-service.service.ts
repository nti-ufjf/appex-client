import { FiltroPaciente } from './../modelos/filtro-paciente';
import { Injectable } from '@angular/core';
//import { APP_API } from './../app.api';
import { APP_API_APPEX } from './../app.api';
//import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
//import { Http, Response, URLSearchParams, HttpClient,   } from '@angular/common/http';

//import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../modelos/pessoa.model';
import { Local } from '../modelos/local.model';
import { Usuario } from '../modelos/usuario.model';
//import {Headers} from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  //  private headers: Headers = new Headers({ 'Content-Type': 'application/json' })
  private headers: Headers = new Headers({ 'Content-Type': 'application/json' })
  private modeloUrl: string = `${APP_API_APPEX}/pessoas`;
  private usuarioUrl: string = `${APP_API_APPEX}/usuarios`;
  //private modeloUrl: string = `${APP_API}/pessoas`;
  //http://localhost:8080/pessoas/1



  constructor(private http: HttpClient) {
    console.log(this.modeloUrl);
  }

  public getPessoas(): Observable<Pessoa[]> {
    //acessa a api rest e retorna a lista de pessoas
    console.log('getPessoas()');
    let retorno = this.http.get(this.modeloUrl) as Observable<Pessoa[]>;
    return retorno;
  }

  public getLocais(): Observable<Local[]> {
    let retorno = this.http.get(this.modeloUrl) as Observable<Local[]>;
    return retorno;
  }

  public getUsuarios(): Observable<Usuario[]> {
    let retorno = this.http.get(this.usuarioUrl) as Observable<Usuario[]>;
    return retorno;
  }


  public getPessoa(id: String): Observable<Pessoa> {
    //acessa a api rest e retorna a lista de pessoas
    console.log('getPessoas()');
    let retorno = this.http.get(this.modeloUrl + "/" + id) as Observable<Pessoa>;
    return retorno;
  }


  getPessoasPromessa2(): Promise<Pessoa[]> {
    return this.http.get(this.modeloUrl)
      //.map(this.extractData)
      .toPromise()
      .catch(this.trataErro);
  }

  //==========================================   
  //usado no testeDataTable
  findLessons(courseId: number, filter = '', sortOrder = 'asc', pageNumber = 0, pageSize = 3): Observable<Pessoa[]> {
    console.log("observando...");
    console.log(this.getPessoas());
    return this.getPessoas();


    /*    return this.http.get(this.modeloUrl, { //      return this.http.get('/api/lessons', {
            params: new HttpParams()
                .set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            (res =>  res["payload"])
        );    */
  }

  public getPessoasFiltro(filtro: FiltroPaciente): Observable<Pessoa[]> {
    console.log(this.modeloUrl);
    return this.http.get(this.modeloUrl) as Observable<Pessoa[]>;
  }


  //==========================================   
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private trataErro(err: any): Promise<any> {
    return Promise.reject(err.message || err);
  }
  /*
    delete(modelo: Pessoa): Promise<Pessoa> {
      const url = `${this.modeloUrl}/remover/${modelo.id}`;
      return null;
    }
  */
  salvar(pessoa: Pessoa): Promise<Pessoa> {
    console.log("salvando pessoa...")
    if (pessoa.id == 0) {
      return this.cadastrar(pessoa);
    } else {
      console.log("Atualizando...")
      return this.atualizar(pessoa);

    }
  }

  salvarUsuario(modelo: Usuario): Promise<Usuario> {
    console.log("salvando usuario...")
    if (modelo.id == 0) {
      return this.cadastrarUsuario(modelo);
    } else {
      console.log("Atualizando...")
      return this.atualizarUsuario(modelo);

    }
  }

  private cadastrarUsuario(modelo: Usuario) {
    if (modelo) {
      console.log("cadastrando <<");
      console.log(modelo);
      console.log(">>");
      const url = `${this.usuarioUrl}/`;
      return this.http
        .post(url, JSON.stringify(modelo), httpOptions)
        .toPromise()
        .then((response: Response) => {
          console.log("Fez a inclusão?");
          console.log(response);
        })
        .catch(this.trataErro);
    } else {
      console.log("o objeto usuário veio vazio");
    }
  }


  private cadastrar(pessoa: Pessoa) {
    if (pessoa) {
      console.log("cadastrando <<");
      console.log(pessoa);
      console.log(">>");
      const url = `${this.modeloUrl}/`;
      //    this.http.post(url, pessoa).subscribe(() => this.navigateToList('Cliente cadastrado com sucesso'));
      return this.http
        //.post(url, pessoa)
        .post(url, JSON.stringify(pessoa), httpOptions)
        .toPromise()
        .then((response: Response) => {
          //   console.log(response.json().data);
          console.log("trete");
          //linha abaixo serve só pra mostrar no console e pode ser retirada
          //return response.json().data as Pessoa;
        })
        .catch(this.trataErro);
    } else {
      console.log("o objeto pessoa veio vazio");
    }
  }

  /*
  create(pessoa: Pessoa): Promise<Pessoa> {
    if (pessoa) {
        return this.http
            .post(this.modeloUrl, JSON.stringify(pessoa), { headers: this.headers })
            .toPromise()
            .then((response: Response) => {
              console.log("gravou [[");
              console.log(pessoa);
              console.log("]]")
            })
            .catch(this.trataErro);
    } else {
        console.log("o objeto pessoa veio vazio");
    }
    // console.log('cadastrar - FIM');
  }*/

  /*
  create(pessoa: Pessoa): Promise<Pessoa> {
    //        return this.http.post(this.clientesUrl, JSON.stringify(cliente), {headers:this.headers})
   // console.log('cadastrar - inicio');
   // console.log(`${APP_API_APPEX}/pessoas`);
    if (pessoa) {
  //          console.log(pessoa);
  //          console.log('-----------------');
        return this.http
            .post(this.modeloUrl, JSON.stringify(pessoa), { headers: this.headers })
            .toPromise()
            .then((response: Response) => {
             //   console.log(response.json().data);
                //linha abaixo serve só pra mostrar no console e pode ser retirada
                return response.json().data as Pessoa;
            })
            .catch(this.trataErro);
    } else {
        console.log("o objeto pessoa veio vazio");
    }
    
  }
  */

  private atualizar(pessoa: Pessoa): Promise<Pessoa> {
    const url = `${this.modeloUrl}/atualizar/${pessoa.id}`;
    return this.http.put(url, pessoa)
      .toPromise()
      .then(() => pessoa as Pessoa)
      .catch(this.trataErro);
  }

  private atualizarUsuario(modelo: Usuario): Promise<Usuario> {
    const url = `${this.usuarioUrl}/atualizar/${modelo.id}`;
    return this.http.put(url, modelo)
      .toPromise()
      .then(() => modelo as Usuario)
      .catch(this.trataErro);
  }

  /*
    update(pessoa: Pessoa): Promise<Pessoa> {
      //        const url = `${APP_API_APPEX}/pessoas/atualizar/${pessoa.id}`; //app/cliente/:id
      const url = `${this.modeloUrl}/atualizar/${pessoa.id}`;
      //        const url = `${APP_API_APPEX}/pessoas/${pessoa.id}`; //app/cliente/:id
      return this.http
        .put(url, JSON.stringify(pessoa), { headers: this.headers })
        .toPromise()
        .then(() => pessoa as Pessoa)
        .catch(this.trataErro);
    }
  
  */


  //adaptado do artigo: https://medium.com/totvsdevelopers/criando-um-crud-com-thf-apagando-um-ou-mais-clientes-49692c1286e9

  delete(modelo: Pessoa) {
    const url = `${this.modeloUrl}/remover/${modelo.id}`;
    return this.http.delete(url)
      .subscribe(() => {
        // EXIBIMOS UM AVISO INFORMANDO QUE O CADASTRO DO CLIENTE FOI APAGADO
        //this.thfNotification.warning('Cadastro do cliente apagado com sucesso.');
        console.log('Cadastro do cliente apagado com sucesso.');
      });
  }

  deleteLocal(modelo: Local) {
    const url = `${this.modeloUrl}/remover/${modelo.id}`;
    return this.http.delete(url)
      .subscribe(() => {
        // EXIBIMOS UM AVISO INFORMANDO QUE O CADASTRO DO CLIENTE FOI APAGADO
        //this.thfNotification.warning('Cadastro do cliente apagado com sucesso.');
        console.log('Cadastro do cliente apagado com sucesso.');
      });
  }

  /*delete(modelo: Pessoa): Promise<Pessoa> {
    //url para onde vamos enviar o post 
    const url = `${this.modeloUrl}/remover/${modelo.id}`;
        return this.http
            .delete(url, { headers: this.headers }) //cabeçalho da requisição
            .toPromise() //Convertemos para um Promise pois o post returna um Observable
            .then(() => modelo as Pessoa)
            .catch(this.trataErro);
  }*/
}
