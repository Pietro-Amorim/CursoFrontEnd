import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Funcionario from "@/models/Funcionario";

export async function GET(req: Request, { params }: any) {
  await dbConnect();
  const funcionario = await Funcionario.findById(params.id);
  return NextResponse.json(funcionario);
}

export async function PUT(req: Request, { params }: any) {
  await dbConnect();
  const data = await req.json();
  const atualizado = await Funcionario.findByIdAndUpdate(params.id, data, { new: true });
  return NextResponse.json(atualizado);
}

export async function DELETE(req: Request, { params }: any) {
  await dbConnect();
  await Funcionario.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Funcionário removido" });
}
