import { NextRequest, NextResponse } from "next/server";

// Usuários de exemplo (você pode conectar com seu DB real depois)
const usuarios = [
  { email: "admin@admin.com", senha: "123", role: "admin" },
  { email: "user@user.com", senha: "123", role: "user" },
];

export async function POST(req: NextRequest) {
  try {
    const { email, senha } = await req.json();

    // Validação
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (!usuario) {
      return NextResponse.json({ message: "E-mail ou senha inválidos" }, { status: 401 });
    }

    // Retorna token fake e role (substitua com JWT real se quiser)
    return NextResponse.json({
      token: "fake-jwt-token",
      role: usuario.role,
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Erro interno no servidor" }, { status: 500 });
  }
}
