import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  private usuario: Usuario = new Usuario();


  constructor(private authService: AuthService) { 
    console.log("entrou no login");
  }

  ngOnInit() {
  }


  fazerLogin() {
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

}
