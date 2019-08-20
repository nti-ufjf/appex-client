import { Endereco }               from './../../../modelos/endereco.model';
import { LocalService }           from './../../../servicos/local.service';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Local }                  from '../../../modelos/local.model';
import { Location }               from '@angular/common';

@Component({
  selector: 'app-local-add',
  templateUrl: './local-add.component.html',
  styleUrls: ['./local-add.component.css']
})
export class LocalAddComponent implements OnInit {
  id:     string;
  modelo: Local;

  constructor(private servico: LocalService,
    private route:       ActivatedRoute,
    private router:      Router,
    private localizacao: Location
  ) { }

  ngOnInit() {
    this.inicializarModelo();
  }

  inicializarModelo() {
    let _endereco = new Endereco();
    _endereco.id          = 0;
    _endereco.bairro      = "";
    _endereco.cep         = "";
    _endereco.complemento = "";
    _endereco.logradouro  = "";
    _endereco.numero      = 0;
    //
    this.modelo           = new Local(); //inicializado para não dar erro enquanto os dados não chegam
    this.modelo.id        = 0;
    this.modelo.nome      = "";
    this.modelo.descricao = "";
    this.modelo.endereco  = _endereco;    
  }

  salvar(modelo: Local) {
    let promessa = this.servico.salvar(modelo);
    promessa.then(paciente => this.localizacao.back());
  }

  cancelar() {
    this.localizacao.back();
  }
}
