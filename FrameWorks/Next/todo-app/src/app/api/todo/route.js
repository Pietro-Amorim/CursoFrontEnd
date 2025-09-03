// duas rotas de Navegação -> GET e POST

import TodoSchema from "../../../models/todo";
import connectMongo from "../../../util/mongodb";
import { NextResponse } from "next/server";

export async function GET(){
    
    // tratamento de erro
    try {
        await connectMongo();
        const todos = await TodoSchema.find({}); // encontrar todas as tarefas
        return NextResponse.json({success: true, data: todos})
    } catch (error) {
        return NextResponse.json({success: false}, {status: 500});        
    }
} 

export async function POTS(req){
     try {
        await connectMongo();
        const data = await req.json(); // convertendo os dados o formulário em json
        const todo = await TodoSchema.create(data); // criando a tarefa
        return NextResponse.json({success: true, data: todo}) 
    } catch (error) {
        return NextResponse.json({sucess: false}, {status: 400});
     }
    }