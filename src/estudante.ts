import moment from 'moment';
export class Estudantes {
    
    //atributos
        public id: string;
        public name: string;
        public email: string;
        public birthDate: string;
        public hobbies: string;
    

   

    
        // todas as variaves que eu vou a colocra no momento de criar uma nova instancia 
        ///constructor 
        constructor(id:string, name:string, email:string, birthDate:string,  hobbies: string){
            //parametros
    
          

            this.id= id;
            this.name=name;
            this.email=email;
            this.birthDate=birthDate;
            this. hobbies=hobbies;
            
           
            }
         
              public estuDante(): void{
                console.log(`Sou ${this.name}, de ${this.email}`)
            }
                                        
        }


        
    
       export const estudantedebiologia: Estudantes= new Estudantes("452545", "Mario", "dedydhe@gmail.com", "12/11/2020","dddd");
        estudantedebiologia.estuDante();

    
    // instanciando            
    




