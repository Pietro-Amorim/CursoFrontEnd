import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export function verifyToken(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) throw new Error("Token não fornecido.");

  const token = authHeader.split(" ")[1];
  return jwt.verify(token, process.env.JWT_SECRET!) as any;
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  // Rotas públicas
  const publicRoutes = ['/login', '/register']
  
  // Se tentar acessar rota pública já estando logado, redireciona para dashboard
  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Se tentar acessar rota protegida sem estar logado, redireciona para login
  if (!token && !publicRoutes.includes(pathname) && pathname !== '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}