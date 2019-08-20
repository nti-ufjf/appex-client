import { FiltroPaciente } from '../../modelos/filtro-paciente';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../modelos/pessoa.model';
import { PessoaServiceService } from '../../servicos/pessoa-service.service';
import { Router } from '@angular/router';
import { DialogConfirmService } from '../../servicos/dialogconfirm.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-pesquisar',
    templateUrl: './pesquisar-paciente.component.html',
    styleUrls: ['./pesquisar-paciente.component.css']
})
export class PesquisarPacienteComponent implements OnInit {

    public loading: boolean        = true; // INICIALIZA COM TRUE PARA A TABELA APARECER COM LOADING ATIVADO
    private filtro: FiltroPaciente = new FiltroPaciente();
    pacientes:      Pessoa[];

    constructor(private pessoaService: PessoaServiceService, private router: Router, private dialogconfirmService: DialogConfirmService) { }

    ngOnInit() {
        this.pessoaService.getPessoas().subscribe(pessoasLst => this.pacientes = pessoasLst);
        this.loading = false;  // FINAL DA CARGA, DESATIVA O LOADING
    }


    pesquisar() {
        this.pacientes = this.pacientes.filter(item => this.encontrar(item));

//        this.pacientes = this.pacientes.filter(item => item.nome == this.filtro.nome);
    }

    incluirPaciente(){
        this.router.navigate(['/paciente/add/']);
   //     this.router.navigate(['/paciente/edit/'+this.pessoa.id]);
    }

    visualizarPessoa(pessoa: Pessoa){
      let x: string;
      x = pessoa.id.toString();
      console.log("O ID é "+x);
      this.router.navigate(['/paciente/'+pessoa.id]);
    }

    encontrar(p:Pessoa):Boolean {
       return p.nome.indexOf(this.filtro.nome)>-1;
    }

    limparPesquisa() {
        this.filtro = new FiltroPaciente();
        this.pessoaService.getPessoas().subscribe(pessoasLst => this.pacientes = pessoasLst);
    }

    onDelete(modelo : Pessoa) : void {
        this.dialogconfirmService.confirm('Deseja excluir o paciente ' + modelo.nome + ' ?')
        .then((podeDeletar : boolean) => {
            if(podeDeletar) {
                this.pessoaService.delete(modelo);
                this.pacientes.splice(this.pacientes.indexOf(modelo),1);
                //this.dialogconfirmService.alerta("Registro excluído com sucesso!");
/*                this.pessoaService
                .delete(modelo)
                .then(()=> {
                     this.pacientes = this.pacientes.filter((p:Pessoa) => p.id != modelo.id);
                }).catch(err => {
                   console.log(err);
                });*/
            }
        });
     }
      

}
