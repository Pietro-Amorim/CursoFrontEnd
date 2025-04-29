// Atividade 1 : Criar uma classe representando Produto
// Atributos: nome, preco, estoque
// Metodos :  Vender, Repor, exibirInfo()

class Produto{
    //Encapsulamento de atributos
    #nome
    #preco
    #estoque

    //Construtor
    constructor(nome, preco, estoque){
        this.#nome = nome;
        this.#preco = preco;
        this.#estoque = estoque;
    }
    //Metodos
    vender(quantidade){
        if(this.#estoque >= quantidade){
            this.#estoque -= quantidade;//estoque = estoque - quantidade
            console.log(`Venda realizada com sucesso! Estoque atual: ${this.#estoque}`);
        }else{
            console.log(`Estoque insuficiente! Estoque atual: ${this.#estoque}`);
       }
    }

    repor(quantidade){
        this.#estoque += quantidade;//estoque = estoque + quantidade
        console.log(`Reposição realizada com sucesso! Estoque atual: ${this.#estoque}`);
    }
    exibirInfo(){
        console.log(`Nome: ${this.#nome} \nPreço: ${this.#preco} \nEstoque: ${this.#estoque}`);
    }
}
//instanciar os objetos
let produto1 = new Produto("Arroz", 30, 100);
produto1.exibirInfo();
produto1.vender(10);
produto1.exibirInfo();
produto1.vender(200);
produto1.repor(50);
produto1.exibirInfo();