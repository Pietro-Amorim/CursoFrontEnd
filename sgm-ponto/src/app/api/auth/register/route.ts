import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Funcionario from "@/models/Funcionario";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  await dbConnect();
  const { nome, email, senha, role } = await req.json();

  const hashed = await bcrypt.hash(senha, 10);
  const funcionario = await Funcionario.create({ nome, email, senha: hashed, role });
  return NextResponse.json(funcionario);
}
