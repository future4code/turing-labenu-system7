import fs from 'fs'
export class FileManager{

private fileName: string;

constructor(fileName:string){
    this.fileName=fileName;
}



    //metodos 
    //para usar el metodo fs debemos intalar npm i @types/node
public writeInJson(data:any): void{
const dataAsString: string= JSON.stringify(data, null, 2);
fs.writeFileSync(this.fileName, dataAsString)

    //camino de arquivo y o que vou a escrever no arquivo 
/*
}
  public readtFromJson() : any{
  try{
    const musicFromJson = fs.readFileSync(this.fileName).toString();
    return JSON.parse(musicFromJson)
  } catch (e){
      console.log(e);
      return[]
  }*/
}

}