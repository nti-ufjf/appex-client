import { LocalService }         from './../../servicos/local.service';
import { FiltroPaciente }       from '../../modelos/filtro-paciente';
import { Component, OnInit }    from '@angular/core';
import { Local }                from '../../modelos/local.model';
import { Router }               from '@angular/router';
import { DialogConfirmService } from '../../servicos/dialogconfirm.service';

@Component({
    selector: 'app-pesquisar-local',
    templateUrl: './pesquisar.component.html',
    styleUrls: ['./pesquisar.component.css']
})
export class PesquisarLocalComponent implements OnInit {
    public loading: boolean        = true; // INICIALIZA COM TRUE PARA A TABELA APARECER COM LOADING ATIVADO
    private filtro: FiltroPaciente = new FiltroPaciente();
    modelos:        Local[];
    urlBase:        string         = "/locais" ;

    constructor(private servico: LocalService, private router: Router, private dialogconfirmService: DialogConfirmService) { }

    ngOnInit() {
        this.servico.getModelos().subscribe(listaRetorno => this.modelos = listaRetorno);
        this.loading = false;  // FINAL DA CARGA, DESATIVA O LOADING
    }

    pesquisar() {
        this.modelos = this.modelos.filter(item => this.encontrar(item));
    }

    incluir(){
        this.router.navigate([this.urlBase+'/add/']);
    }

    visualizar(modelo: Local){
      this.router.navigate([this.urlBase+'/ver/'+modelo.id]);
    }

    encontrar(p:Local):Boolean {
       return p.nome.indexOf(this.filtro.nome)>-1;
    }

    limparPesquisa() {
        this.filtro = new FiltroPaciente();
        this.servico.getModelos().subscribe(listaRetorno => this.modelos = listaRetorno);
    }

    onDelete(modelo: Local) : void {
        this.dialogconfirmService.confirm('Deseja excluir o registro "' + modelo.nome + '" ?')
        .then((podeDeletar : boolean) => {
            if(podeDeletar) {
                this.servico.delete(modelo);
                this.modelos.splice(this.modelos.indexOf(modelo),1);
            }
        });
     }     

}
