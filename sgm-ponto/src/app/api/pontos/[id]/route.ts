import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Ponto from "@/models/Ponto";

export async function GET(req: Request, { params }: any) {
  await dbConnect();
  const registros = await Ponto.find({ funcionarioId: params.id }).sort({ data: 1 });

  let total = 0;
  for (let i = 0; i < registros.length; i += 2) {
    if (registros[i + 1]) {
      const entrada = new Date(registros[i].data);
      const saida = new Date(registros[i + 1].data);
      total += (saida.getTime() - entrada.getTime()) / (1000 * 60 * 60);
    }
  }

  return NextResponse.json({ totalHoras: total.toFixed(2) });
}
