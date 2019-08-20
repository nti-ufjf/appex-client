import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../modelos/pessoa.model';
import { PessoaServiceService } from '../../servicos/pessoa-service.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

    id : string;
    pessoa: Pessoa;
    lancando: Boolean = true;


  constructor(private pessoaService: PessoaServiceService, private route: ActivatedRoute, private router: Router) { 
    this.lancando = false;
  }

  ngOnInit() {
    this.pessoa       = new Pessoa(); //inicializado para não dar erro enquanto os dados não chegam
    this.pessoa.id    = 0;
    this.pessoa.nome  = "";
    this.pessoa.email = "";

    this.id = this.route.snapshot.params['id'];
    this.pessoaService.getPessoa(this.id).subscribe(retorno => this.pessoa = retorno);
    this.lancando = false;
  }


  IrParaPesquisa() {
    this.router.navigate(['/pesquisar/']);
  }

  Alterar(p:Pessoa) {
    console.log("Pessoa:"+this.pessoa.nome);
    this.router.navigate(['/paciente/edit/'+this.pessoa.id]);
  }

  Lancar() {
    this.lancando = this.lancando?false:true;
  }

}
