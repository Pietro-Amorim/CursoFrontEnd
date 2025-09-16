// Funçoes do Controller 

import Tarefa, { ITarefa } from "@/models/tarefa";
import connectMongo from "@/services/mongodb";

//get -> todas as tarefas
export const getAllTarefas = async(): Promise<ITarefa[]> => {
    await connectMongo();
    const tarefas = await Tarefa.find({}); // busca todas as tarefas da coleção tarefas
    return tarefas;
}

//post -> criar nova tarefa na coleção 
export const createTarefa = async (data: Partial<ITarefa>): Promise<ITarefa> =>{  // partial => nem todas as informações serão enviadas, por exemplo o id que sera inserido automaticamente no BD
    await connectMongo();
    const tarefa = await Tarefa.create(data);
    return tarefa;  // retorna a tarefa criada com o id
}

//patch (atualização parcial de um obj) -> passo o id + o que sera atualizado
export const updateTarefa = async(id: string, data: Partial<ITarefa>): Promise<ITarefa | null> =>{
    await connectMongo();
    const tarefa = await Tarefa.findByIdAndUpdate(id, data, {
        new: true, runValidators: true
    });
    return tarefa; // retorna a tarefa atualizada 
}

//delete -> deletar tarefa
export const deleteTarefa = async(id:string):Promise<boolean> =>{
    await connectMongo();
    const resultado = await Tarefa.deleteOne({_id:id});
    return resultado.deletedCount>0;    
}