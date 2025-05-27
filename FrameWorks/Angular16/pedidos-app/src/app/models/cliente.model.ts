//classe model para manipulação de dados

export class Cliente{

/////////////////////////////////////////////////////////
    //atributos
    // private id: number; //tipagem primitiva
    // public nome: string;
    
    // constructor(id: number, nome: string){
        // this.id = id;
        // this.nome = nome;
    // }

    ///Métodos de acesso publicos
    //  public getId(): number{
        // return this.id;
    //  }
     
    // public setId(id: number): void{
            // this.id = id;
        // }

/////////////////////////////////////////////////////////
        //Forma abreviada de escrever o model
    constructor(
        public id: number,
        public nome: string
    ){}
}