import { createTarefa, getAllTarefas } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";

// criar as rotas que nao precisam de id
export async function GET(){
    try {
        const tarefas = await getAllTarefas();
        // trata a resposta obtida com a conexão com o MongoDB
        return NextResponse.json({sucess: true, data: tarefas});
    } catch (error) {
        return NextResponse.json({
            sucess: false,
            error: `Falha ao buscar as tarefas: ${error}`
        }, {status: 500});
    }
}

export async function POST(req: NextRequest){
    try {
        const data = await req.json();
        const newTarefa = await createTarefa(data);
        return NextResponse.json({sucess:true, data: newTarefa}, {status:201});
    } catch (error) {
        return NextResponse.json({
            sucess: false,
            error: `Falha ao criar a tarefa: ${error}`
        }, {status: 400} );
    }
}