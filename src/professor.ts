import { Usuario } from './usuario';

export enum TEACHER_SPECIALTY {
  REACT = 'REACT',
  REDUX = 'REDUX',
  CSS = 'CSS',
  TESTES = 'TESTES',
  TYPESCRIPT = 'TYPESCRIPT',
  OOP = 'OOP',
  BACKEND = 'BACKEND',
}

export class Professor implements Usuario {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public especialidade: TEACHER_SPECIALTY[],
  ) {}
}

const newProfessor: Professor = new Professor(
  '1',
  'Professor aloprado',
  'aloprado@yahoo.com.br',
  [TEACHER_SPECIALTY.REDUX],
);

console.log(newProfessor);
