import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Funcionario from "@/models/Funcionario";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  await dbConnect();
  const { email, senha } = await req.json();

  const user = await Funcionario.findOne({ email });
  if (!user) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 });

  const isValid = await bcrypt.compare(senha, user.senha);
  if (!isValid) return NextResponse.json({ error: "Senha incorreta" }, { status: 401 });

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: "8h" });
  return NextResponse.json({ token, nome: user.nome, role: user.role });
}
