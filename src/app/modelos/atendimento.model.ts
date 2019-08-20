import { Pessoa } from './pessoa.model';
import { Curso } from './curso.model';
import { Usuario } from './usuario.model';

export class Atendimento {
    id: number;
    curso: Curso;
    paciente: Pessoa;
    procedimento: string;
    data: Date;
    descricao: string;
    usuario: Usuario; //pessoa que fez o registro do atendimento;
}