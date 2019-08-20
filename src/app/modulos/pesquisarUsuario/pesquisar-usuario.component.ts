import { Usuario } from './../../modelos/usuario.model';
import { FiltroPaciente } from '../../modelos/filtro-paciente';
import { Component, OnInit } from '@angular/core';
import { PessoaServiceService } from '../../servicos/pessoa-service.service';
import { Router } from '@angular/router';
import { DialogConfirmService } from '../../servicos/dialogconfirm.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-pesquisar-usuario',
    templateUrl: './pesquisar-usuario.component.html',
    styleUrls: ['./pesquisar-usuario.component.css']
})
export class PesquisarUsuarioComponent implements OnInit {

    public loading: boolean        = true; // INICIALIZA COM TRUE PARA A TABELA APARECER COM LOADING ATIVADO
    private filtro: FiltroPaciente = new FiltroPaciente();
    usuarios:      Usuario[];

    constructor(private pessoaService: PessoaServiceService, private router: Router, private dialogconfirmService: DialogConfirmService) { }

    ngOnInit() {
        this.pessoaService.getUsuarios().subscribe(lista => this.usuarios = lista);
        this.loading = false;  // FINAL DA CARGA, DESATIVA O LOADING
    }


    pesquisar() {
        this.usuarios = this.usuarios.filter(item => this.encontrar(item));
    }

    incluirRegistro(){
        this.router.navigate(['/usuario/add/']);
    }

    visualizarRegistro(modelo: Usuario){
      let x: string;
      x = modelo.id.toString();
      console.log("O ID é "+x);
      this.router.navigate(['/usuario/'+modelo.id]);
    }

    encontrar(modelo:Usuario):Boolean {
       return modelo.nome.indexOf(this.filtro.nome)>-1;
    }

    limparPesquisa() {
        this.filtro = new FiltroPaciente();
        this.pessoaService.getUsuarios().subscribe(lista => this.usuarios = lista);
    }

    onDelete(modelo : Usuario) : void {
        this.dialogconfirmService.confirm('Deseja excluir o registro ' + modelo.nome + ' ?')
        .then((podeDeletar : boolean) => {
            if(podeDeletar) {
                this.pessoaService.delete(modelo);
                this.usuarios.splice(this.usuarios.indexOf(modelo),1);
            }
        });
     }
      

}
