import {FileManager} from "./FileManager";
import { Estudantes, estudantedebiologia } from "./estudante";

const fileManager: FileManager= new FileManager ('estudante.json');
fileManager.writeInJson(estudantedebiologia);