import { Pessoa } from './pessoa.model';

export class Usuario extends Pessoa {
    login: string;
    senha: string;
    pathFoto: string;
 
    constructor() { 
        super();
    }
/*
    get login(): string {
        return this.login;
    }

    set login(login: string) {
        this.login = login;
    }

    get senha(): string {
        return this.senha;
    }
    
    set senha(senha: string) {
        this.senha = senha;
    }

    get pathFoto(): string {
        return this.pathFoto;
    }
    
    set pathFoto(pathFoto: string) {
        this.pathFoto = pathFoto;
    }
*/
}