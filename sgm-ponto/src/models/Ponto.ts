import mongoose, { Schema, model, models } from "mongoose";

const PontoSchema = new Schema({
  funcionarioId: { type: Schema.Types.ObjectId, ref: "Funcionario", required: true },
  data: { type: Date, required: true },
  hora: { type: String, required: true },
  tipo: { type: String, enum: ["Entrada", "Saída"], required: true }
});

export default models.Ponto || model("Ponto", PontoSchema);
