import { Professor, TEACHER_SPECIALTY } from './Professor';

const newProfessor: Professor = new Professor(
  '1',
  'Professor aloprado',
  'aloprado@yahoo.com.br',
  [TEACHER_SPECIALTY.REDUX],
);

console.log(newProfessor);
