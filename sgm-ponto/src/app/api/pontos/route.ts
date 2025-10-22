import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Ponto from "@/models/Ponto";

export async function GET(req: Request) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const funcionarioId = searchParams.get("funcionarioId");
  const registros = await Ponto.find({ funcionarioId }).sort({ data: -1 });
  return NextResponse.json(registros);
}

export async function POST(req: Request) {
  await dbConnect();
  const { funcionarioId } = await req.json();

  // busca o último registro
  const ultimo = await Ponto.findOne({ funcionarioId }).sort({ data: -1 });
  const proximoTipo = !ultimo || ultimo.tipo === "Saída" ? "Entrada" : "Saída";

  const novo = await Ponto.create({
    funcionarioId,
    data: new Date(),
    hora: new Date().toLocaleTimeString("pt-BR", { hour12: false }),
    tipo: proximoTipo
  });

  return NextResponse.json(novo);
}
