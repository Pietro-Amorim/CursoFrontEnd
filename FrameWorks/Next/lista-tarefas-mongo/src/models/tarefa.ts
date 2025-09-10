import mongoose, { Document, Model, Schema } from "mongoose";
    
// definir a estrutura do obj
export interface ITarefa  extends Document{
    // herdamos a base document do mongoose
    // atributos
    titulo: string;
    concluida: boolean;
    criadaEm: Date;
}

// criar o schema (a regra) no mongo DB

const TarefaSchema: Schema<ITarefa> = new mongoose.Schema({
    titulo: { 
        type: String, 
        required: [true, "O título é obrigatório" ],
        trim: true,
        maxlength: [50, "O título deve ter no máximo 50 caracteres"]
    },
    concluida: {
        type: Boolean,
        default: false
    },
    criadaEm: {
        type: Date,
        default: Date.now // pega o carimbo de data e hora que a tarefa foi criada
    }
})

// export do modelo

const Tarefa: Model<ITarefa> = mongoose.models.Tarefa || mongoose.model<ITarefa>("Tarefa", TarefaSchema);

export default Tarefa;