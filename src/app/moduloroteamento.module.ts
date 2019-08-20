import { AdminGuard } from './guards/admin.guard';
import { PesquisarPacienteComponent } from './modulos/pesquisarPaciente/pesquisar-paciente.component';
import { PesquisarUsuarioComponent } from './modulos/pesquisarUsuario/pesquisar-usuario.component';
import { PesquisarLocalComponent } from './modulos/local/pesquisar.component';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modulos/login/login.component';
import { HomeComponent } from 'src/app/modulos/home/home.component';
import { FramePageComponent } from './frame-page/frame-page.component';
import { ParametroComponent } from './modulos/parametro/parametro.component';
import { SobreComponent } from './modulos/sobre/sobre.component';
import { AtendimentoComponent } from './modulos/atendimento/atendimento.component';
import { BairroComponent } from './modulos/bairros/bairro.component';
import { UsuarioComponent } from './modulos/usuario/usuario.component';
import { AuthGuard } from './guards/auth.guard';

import { PacienteComponent }     from './modulos/paciente/paciente.component';
import { PacienteEditComponent } from './modulos/paciente/edit/paciente-edit.component';
import { PacienteAddComponent }  from './modulos/paciente/add/paciente-add.component';

import { LocalComponent }     from './modulos/local/ver/local.component';
import { LocalAddComponent }  from './modulos/local/add/local-add.component';
import { LocalEditComponent } from './modulos/local/edit/local-edit.component';

import { UsuarioAddComponent } from './modulos/usuario/add/usuario-add.component';


//const routes: Routes = [];

/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/

const routes: Routes = [
	//localhost:4200/
	{
		path: '',
		component: CabecalhoComponent,
		canActivate: [AuthGuard], //necessita estar logado
		children: [{ path: '', component: LoginComponent }]
	},
	{
		path: 'home',
		component: CabecalhoComponent,
//		canActivate: [AuthGuard], //necessita estar logado
		children: [{
			path: '',
			component: HomeComponent
		}]
	},
	{
		path: 'login',
		component: CabecalhoComponent,
		children: [{ path: '', component: LoginComponent }]
	},
	{
		path: 'atendimento',
		component: CabecalhoComponent,
		//canActivate: [AuthGuard], //necessita estar logado
		children: [{ path: '', component: AtendimentoComponent }]
	},
	{
		path: 'parametro',
		component: CabecalhoComponent,
		canActivate: [AuthGuard], //necessita estar logado
		children: [{ path: '', component: ParametroComponent }]
	},
	{ path: 'sobre', component: CabecalhoComponent, children: [{ path: '', component: SobreComponent }] },
	{
		path: 'pesquisar',
		component: CabecalhoComponent,
		children: [{ path: '', component: PesquisarPacienteComponent }]
	},
	{
		path: 'paciente',
		component: CabecalhoComponent,
		children: [
			{ path: 'add',      component: PacienteAddComponent  },
			{ path: '',         component: PacienteComponent     }, //se tentar acessar o paciente sem o ID é redirecionado para a pesquisa
			{ path: ':id',      component: PacienteComponent     },
			{ path: 'edit/:id', component: PacienteEditComponent }
		]
	},
	{
		path: 'bairros',
		component: CabecalhoComponent,
//		canActivate: [AuthGuard], //necessita estar logado
		children: [{ path: '', component: BairroComponent }]
	},
	{
		path: 'locais',
		component: CabecalhoComponent,
//		canActivate: [AuthGuard], //necessita estar logado
		children: [
			{ path: 'add',      component: LocalAddComponent  },
			{ path: 'ver/:id',  component: LocalComponent     },
			{ path: 'edit/:id', component: LocalEditComponent },
			{ path: '',         component: PesquisarLocalComponent },
		]
	},
	{
		path: 'usuarios',
		component: CabecalhoComponent,
//		canActivate: [AuthGuard], //necessita estar logado
		children: [
			{ path: '',         component: PesquisarUsuarioComponent },
		]
	},
	{
		path: 'usuario',
		component: CabecalhoComponent,
//		canActivate: [AuthGuard], //necessita estar logado
		children: [
			{ path: 'add',      component: UsuarioAddComponent  },
		]
	},
];
/*
const	rotas:	Routes	=	[
	{path:	'',	component:	LoginComponent},
	{path:	'inbox',	component:	CaixaDeEntradaComponent	},
	{path:	'home',	component:	HomeComponent	},
]
*/
//export const	ModuloRoteamento	=	RouterModule.forRoot(rotas);
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class ModuloRoteamento { }