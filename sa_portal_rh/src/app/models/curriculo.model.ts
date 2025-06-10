//arquivo responsável pela modelagem de dados para Curriculos
export class Curriculo{



  //atributos
  constructor(
    private _id:number,
    private _nome: string,
    private _idade: number,
    private _telefone: number,
    private _email: number,
    private _descricao: string,
  ){}

  //Criar os métodos de acesso públicos (getters e setters)
  
  public get id() : number {
    return this._id;
  }
  public set id(v : number) {
    this._idade = v;
  }

  
    public get nome(): string {
      return this._nome;
  }
  public set nome(value: string) {
      this._nome = value;
  } 


    public get idade() : number {
    return this._id;
  }
  public set idade(v : number) {
    this._idade = v;
  }


        public get telefone(): number {
        return this._telefone;
    }
    public set telefone(value: number) {
        this._telefone = value;
    }


        public get email(): any {
        return this._email;
    }
    public set email(value: any) {
        this._email = value;
    }


        public get descricao(): string {
        return this._descricao;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }
    


    // métodos de conversão de objetos

    public toMap():{[key:string]:any}{
      return{
        id: this._id,
        nome: this._nome,
        idade: this._idade,
        telefone: this._telefone,
        email: this._email,
        descricao: this._descricao
      }
    }

    static fromMap(map:any): Curriculo{
      return new Curriculo(
        map.id,
        map.nome,
        map.idade,
        map.telefone,
        map.email,
        map.descricao
      )
    }
    
}