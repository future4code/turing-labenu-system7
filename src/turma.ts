import { Professor } from "./professor"
import { Estudante } from "./estudante"
import moment from 'moment'

abstract class Turma {
    private nome: string = ""
  
    constructor(
      private id: string,
      private DataInicial: moment.Moment,
      private DataFinal: moment.Moment,
      private professores: Professor[] = [],
      private estudantes: Estudante[] = [],
      private ModuloAtual: number | undefined
    ) {}
  
    public pegarId(): string {
      return this.id;
    }
  
    public pegarNome(nome: string): string {
      return this.nome
    }
  
    public pegarDataInicial(): moment.Moment {
      return this.DataInicial
    }
  
    public pegarDataFinal(): moment.Moment {
      return this.DataFinal
    }
  
    public pegarModuloAtual(): number | undefined {
      return this.ModuloAtual
    }
  
    public addProfessor(professor: Professor) {
      this.professores.push(professor)
    }
  
    public addEstudante(estudante: Estudante) {
      this.estudantes.push(estudante)
    }
  
    public atualizarNome(nome: string) {
      this.nome = nome;
    }
  }

class Integral extends Turma {}

class Noturna extends Turma {
    public atualizarNome(nome: string) {
        if (nome.indexOf("-na-night") !== -1) {
        super.atualizarNome(nome);
        }
    }
}