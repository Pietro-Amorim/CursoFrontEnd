import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Funcionario from "@/models/Funcionario";
import bcrypt from "bcryptjs";

export async function GET() {
  await dbConnect();
  const funcionarios = await Funcionario.find();
  return NextResponse.json(funcionarios);
}

export async function POST(req: Request) {
  await dbConnect();
  const { nome, email, senha, role } = await req.json();
  const hashed = await bcrypt.hash(senha, 10);
  const novo = await Funcionario.create({ nome, email, senha: hashed, role });
  return NextResponse.json(novo);
}
