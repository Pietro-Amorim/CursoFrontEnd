

// Pega a String de Conexão nas Variaveis de Ambente do Projeto(Environment)

import mongoose from "mongoose";
import { cache } from "react";

//transforma texto em uma endereço URL (URI)
const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI) {
    throw new Error("Defina o DATABASE_URL no .env.local");
}

// cache do sistema (mongoose), armazenar a as conexões já estabelecidads
let cached = (global as any).mongoose;

//se cached não existir (primeira vez que acesso ao site)
if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectMongo() {
    //Verificar se Conexão já existe, se já existe retorna a propria conexão
    if (cached.conn) return cached.conn;
    //verificar se não existe uma promessa de conexão em andamento
    if (!cached.promise) { //isso é nulo
        const aguard = { bufferCommands: false };
        //crio uma promissa de conexão
        cached.promise = mongoose.connect(MONGODB_URI!, aguard)
            .then((mongoose) => {
                console.log("Conectado ao Mongo");
                return mongoose
            });
    }
    //aguardar a conexão ser criada
    try {
        //cria a conexão a partir da promessa que estava pendente
        cached.conn = await cached.promise;
    } catch (error) {
        //se conexão falhar
        cached.promise = null;
        throw error; //lança o erro para o view
    }

    return cached.conn;
}

// transforma em um componente reutilizado por conectar ao MongoDB
export default connectMongo;


// 1º passo - criar o enedereço de conexão com o MongoDB
// 2º passo - criar o cached para armazenar as conexões ao longo do projeto
// 3º passo - verificar se a conexão já existe
// 4º passo - verificar se não existe uma promessa de conexão em andamento
// 5º passo - Estabelece a conexão com o banco