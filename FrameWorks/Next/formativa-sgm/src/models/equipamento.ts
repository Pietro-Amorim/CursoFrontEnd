//classe de modelagem de dados para Equipamentos
//mongoose -> vai ajusar na modelagem da classe

import mongoose, { Document, Model, Schema } from "mongoose";

//atributos
export interface IEquipamento extends Document{
    _id: string;
    modelo: string;
    marca: string;
    numSerie: string;
    status: string;
    localizacao: string;
}

//construtor (Schema)
const EquipamentoSchema: Schema<IEquipamento> = new Schema({
    modelo: {type: String, required:true},
    marca: {type: String, required:true},
    numSerie: {type: String, required:true, unique:true},
    status: { type: String, enum: ["ativo", "inativo", "manutencao"], default: "ativo" },
    localizacao: {type: String, required:true},

})

//toMap <=> fromMap
const Equipamento : Model <IEquipamento> = mongoose.models.Equipamento 
    || mongoose.model<IEquipamento>("Equipamento", EquipamentoSchema);

// componnete reutilizavel
export default Equipamento;