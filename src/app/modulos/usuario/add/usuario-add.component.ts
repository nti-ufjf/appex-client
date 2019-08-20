import { PessoaServiceService } from './../../../servicos/pessoa-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../modelos/usuario.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

    id : string;
    modelo: Usuario;
    


  constructor(private servico: PessoaServiceService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private localizacao: Location
  ) { }

  ngOnInit() {
    this.modelo       = new Usuario(); //inicializado para não dar erro enquanto os dados não chegam
    this.modelo.id    = 0;
    this.modelo.nome  = "";
    this.modelo.email = "";
    this.modelo.login = "";
    this.modelo.senha = "";

   // this.id = this.route.snapshot.params['id'];
  //  this.servico.getPessoa(this.id).subscribe(retorno => this.paciente = retorno);
  }

  salvar(modelo: Usuario) {
    console.log(modelo);
    let promessa;
    promessa = this.servico.salvarUsuario(modelo);
    console.log(promessa);
    promessa.then(modelo=> this.localizacao.back()); 
  }

  cancelar() {
    this.localizacao.back();
  }
}
