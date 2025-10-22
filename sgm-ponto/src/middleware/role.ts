import { verifyToken } from "./auth";
import { NextRequest } from "next/server";

export function requireAdmin(req: NextRequest) {
  const user = verifyToken(req);
  if (user.role !== "admin") throw new Error("Acesso negado");
  return user;
}
