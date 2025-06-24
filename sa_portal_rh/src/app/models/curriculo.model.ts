// arquivo responsável pela modelagem de dados para Curriculos
export class Curriculo {

    // atributos
    constructor(
        public id: number,
        public nome: string,
        public idade: number,
        public telefone: string, // Tipo STRING - Correto para telefone
        public email: string,    // Tipo STRING - Correto para email
        public descricao: string,
    ) {}

    
    // métodos de conversão de objetos

    public toMap(): { [key: string]: any } {
        return {
            id: this.id,
            nome: this.nome,
            idade: this.idade,
            telefone: this.telefone,
            email: this.email,
            descricao: this.descricao
        };
    }

    static fromMap(map: any): Curriculo {
        return new Curriculo(
            map.id,
            map.nome,
            map.idade,
            // Garante que telefone e email sejam string ao criar a instância
            map.telefone ? String(map.telefone) : '', // Conversão segura para string
            map.email ? String(map.email) : '',       // Conversão segura para string
            map.descricao
        );
    }
}