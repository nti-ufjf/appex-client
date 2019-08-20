import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './modulos/login/auth.service';
import { BairroComponent } from './modulos/bairros/bairro.component';
import { AtendimentoComponent } from './modulos/atendimento/atendimento.component';
import { SobreComponent } from './modulos/sobre/sobre.component';
import { ParametroComponent } from './modulos/parametro/parametro.component';
import { HistoricoComponent } from './modulos/historico/historico.component';
import { HomeComponent } from './modulos/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModuloRoteamento } from './moduloroteamento.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './modulos/login/login.component';
import { FrameLessPageComponent } from './frame-less-page/frame-less-page.component';
import { FramePageComponent } from './frame-page/frame-page.component';
import { PesquisarPacienteComponent } from './modulos/pesquisarPaciente/pesquisar-paciente.component';
import { PesquisarUsuarioComponent } from './modulos/pesquisarUsuario/pesquisar-usuario.component';
import { PesquisarLocalComponent } from './modulos/local/pesquisar.component';
import { UsuarioComponent } from './modulos/usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import {
  MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, 
  MatProgressSpinnerModule, MatRadioButton, MatRadioGroup, MatDatepicker, MatDatepickerToggle, MatTabGroup, MatTab
} from '@angular/material';
import { DialogConfirmService } from './servicos/dialogconfirm.service';

import { PacienteComponent }     from './modulos/paciente/paciente.component';
import { PacienteEditComponent } from './modulos/paciente/edit/paciente-edit.component';
import { PacienteAddComponent }  from './modulos/paciente/add/paciente-add.component';

import { LocalAddComponent }     from './modulos/local/add/local-add.component';
import { LocalEditComponent }    from './modulos/local/edit/local-edit.component';
import { LocalComponent }        from './modulos/local/ver/local.component';

import { UsuarioAddComponent } from './modulos/usuario/add/usuario-add.component';
import { MatTabsModule } from '@angular/material/tabs';


import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
//import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
//import {MatCardModule} from '@angular/material/card';
//import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
//import {MatIconModule} from '@angular/material/icon';
//import {MatInputModule} from '@angular/material/input';
//import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
//import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
//import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
//import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//import {MatSortModule} from '@angular/material/sort';
//import {MatTableModule} from '@angular/material/table';
//import {MatTabsModule} from '@angular/material/tabs';
//import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';


import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FramePageComponent,
    FrameLessPageComponent,
    LoginComponent,
    HomeComponent,
    PacienteComponent,
    ParametroComponent,
    HistoricoComponent,
    SobreComponent,
    PesquisarPacienteComponent,
    PesquisarUsuarioComponent,
    PesquisarLocalComponent,
    PacienteEditComponent,
    PacienteAddComponent,
    LocalAddComponent,
    LocalEditComponent,
    LocalComponent,
    UsuarioAddComponent,
    AtendimentoComponent,
    BairroComponent,   
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    ModuloRoteamento,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    BrowserAnimationsModule,
    //MatTabGroup, MatTab,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    BrowserModule, //daqui pra baixo é para teste de Data Table
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule,
    MatSelectModule,
    //MatDatepicker,
    //MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule //teste do Data Table termina aqui
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}, AuthService, AuthGuard, AdminGuard, HttpClient, DialogConfirmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
