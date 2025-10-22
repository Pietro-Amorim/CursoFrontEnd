import mongoose, { Schema, model, models } from "mongoose";

const FuncionarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  role: { type: String, enum: ["admin", "funcionario"], default: "funcionario" }
});

export default models.Funcionario || model("Funcionario", FuncionarioSchema);
