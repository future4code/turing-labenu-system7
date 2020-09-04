import { Professor, TEACHER_SPECIALTY } from './Professor';
import {FileManager} from "./FileManager";
import { Estudantes, estudantedebiologia } from "./estudante";

const newProfessor: Professor = new Professor(
  '1',
  'Professor aloprado',
  'aloprado@yahoo.com.br',
  [TEACHER_SPECIALTY.REDUX],
);

console.log(newProfessor);

const fileManager: FileManager= new FileManager ('estudante.json');
fileManager.writeInJson(estudantedebiologia);

