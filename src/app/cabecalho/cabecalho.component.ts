//import { Usuario } from '../modelos/usuario.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../modulos/login/auth.service';
import { Pessoa } from '../modelos/pessoa.model';
import { Usuario } from '../modelos/usuario.model';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: [
    './cabecalho.component.css',
    './cabecalho-search.css'
  ]
})
export class CabecalhoComponent implements OnInit {

  private _isMenuOpen = false
  mostrarMenu: boolean = false;
  usuarioLogado: Usuario;

  constructor(private authService: AuthService) {
    console.log("entrou no cabecalho");
  }
  
  ngOnInit() {
    this.usuarioLogado      = new Usuario();
    this.usuarioLogado.id   = 1;
    this.usuarioLogado.nome = "Jefferson P. Aniceto";
    this.usuarioLogado.email= "jefferson@gmail.com";
    this.usuarioLogado.pathFoto = "http://placehold.it/48x48";
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
    //"http://placehold.it/48x48"
  }

  get isMenuOpen() {
    return this._isMenuOpen
  }
  toggleMenu() {
    this._isMenuOpen = !this.isMenuOpen
  }
  /*não funcionou muito bem não.
  era pra entrar desabilitado o menu e habilitar se logar,
  mas ele não esta habilitando apesar de deixar acessar a home
  
  possibilidades???
  
  testar com o component nav*/

}
