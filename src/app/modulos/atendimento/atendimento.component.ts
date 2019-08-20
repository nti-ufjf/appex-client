import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../modelos/pessoa.model';
import { Atendimento } from '../../modelos/atendimento.model'
import { Curso } from '../../modelos/curso.model';
import { PessoaServiceService } from '../../servicos/pessoa-service.service';
import {FormControl, Validators} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Usuario } from '../../modelos/usuario.model';


@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css']
})
export class AtendimentoComponent implements OnInit {
  id: string;
  paciente: Pessoa;
  atendimento: Atendimento;
  cursos: Curso[];
  formAtendimento = new FormControl('', [Validators.required]);

  constructor(
    private localizacao: Location,
    private router: Router,
    private route: ActivatedRoute,
    private servico: PessoaServiceService
  ) { }

  ngOnInit() {
    this.inicializaVariavelPaciente();
    this.carregaDadosPaciente(this.route.snapshot.params['id']);
    this.carregaArrayCursos();
    this.inicializaVariavelAtendimento();
  }

  inicializaVariavelPaciente() {
    //inicializado para não dar erro enquanto os dados não chegam
    this.paciente       = new Pessoa(); 
    this.paciente.id    = 0;
    this.paciente.nome  = "";
    this.paciente.email = "";
  }

  inicializaVariavelAtendimento() {
    this.atendimento = new Atendimento();
    //
    this.atendimento.id           = 1;
    this.atendimento.curso        = this.cursos[0];
    this.atendimento.procedimento = "aaa";
    this.atendimento.data         = new Date();
    this.atendimento.descricao    = "teste";
    this.atendimento.usuario      = this.obtemUsuarioLogado();
  }

  obtemUsuarioLogado(): Usuario {
    return new Usuario();
  }

  carregaDadosPaciente(id) {
    this.servico.getPessoa(id).subscribe(retorno => this.paciente = retorno);
  }

  carregaArrayCursos() {
    this.cursos = [
      {id: 1, nome: 'Fisioterapia'},
      {id: 2, nome: 'Odontologia'},
      {id: 3, nome: 'Medicina'},
      {id: 4, nome: 'Medicina'},
      {id: 5, nome: 'Medicina'},
      {id: 6, nome: 'Medicina'},
      {id: 7, nome: 'Medicina'}
    ];
  }

  salvar(atendimento: Atendimento) {
    atendimento.paciente = this.paciente;    
    console.log(atendimento);
  }

  cancelar() {
    this.localizacao.back();
  }

}
