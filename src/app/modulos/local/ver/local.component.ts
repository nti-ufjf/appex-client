import { LocalService }           from '../../../servicos/local.service';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Local }                  from '../../../modelos/local.model';
import { DialogConfirmService }   from '../../../servicos/dialogconfirm.service';
import { Location }               from '@angular/common';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  id:     string;
  modelo: Local;

  constructor(
    private servico:              LocalService,
    private route:                ActivatedRoute,
    private router:               Router,
    private dialogconfirmService: DialogConfirmService,
    private localizacao:          Location
  ) { }

  ngOnInit() {
    this.inicializarModelo();

    this.id = this.route.snapshot.params['id'];
    this.servico.getModelo(this.id).subscribe(retorno => this.modelo = retorno);
  }

  inicializarModelo() {
    this.modelo           = new Local(); //inicializado para não dar erro enquanto os dados não chegam
    this.modelo.id        = 0;
    this.modelo.nome      = "";
    this.modelo.descricao = "";
  }

  IrParaPesquisa() {
    this.router.navigate(['/locais/']);
  }

  Alterar(p: Local) {
    this.router.navigate(['/locais/edit/' + this.modelo.id]);
  }

  onDelete(modelo: Local): void {
    this.dialogconfirmService.confirm('Deseja excluir o registro "' + modelo.nome + '" ?')
      .then((podeDeletar: boolean) => {
        if (podeDeletar) {
          this.servico.delete(modelo);
          this.localizacao.back();
        }
      });
  }
}
