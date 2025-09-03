// schema da tabela (montagem)

import mongoose from "mongoose";


// function para definir o schema
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "O titulo e obrigatorio"],
        trim: true, // remover espacos do inicio e fim
        kMaxLength: [100, "O titulo nao pode passar de 100 caracteres"]
    },
    completed: {
        type: Boolean,
        default: false // valor padrao
    },
    createdAt:{
        type: Date,
        default: Date.now, //Registra a Data do Momento da Criação da Tarefa
    }
    }
);

export default TodoSchema;