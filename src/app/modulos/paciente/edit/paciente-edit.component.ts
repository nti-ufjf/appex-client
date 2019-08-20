import { PessoaServiceService } from './../../../servicos/pessoa-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../../modelos/pessoa.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-paciente-edit',
  templateUrl: './paciente-edit.component.html',
  styleUrls: ['./paciente-edit.component.css']
})
export class PacienteEditComponent implements OnInit {

    id : string;
    paciente: Pessoa;
    


  constructor(private servico: PessoaServiceService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private localizacao: Location
  ) { }

  ngOnInit() {
    this.paciente       = new Pessoa(); //inicializado para não dar erro enquanto os dados não chegam
    this.paciente.id    = 0;
    this.paciente.nome  = "";
    this.paciente.email = "";

    this.id = this.route.snapshot.params['id'];
    this.servico.getPessoa(this.id).subscribe(retorno => this.paciente = retorno);
  }

  salvar(paciente: Pessoa) {
    let promessa;
    promessa = this.servico.salvar(paciente);
    
//    this.router.navigate(['/paciente/'+paciente.id]);    
    promessa.then(paciente=> this.localizacao.back()); 
  }

  cancelar() {
    this.localizacao.back();
  }
}
