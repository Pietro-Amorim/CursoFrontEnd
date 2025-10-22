import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export function verifyToken(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) throw new Error("Token não fornecido.");

  const token = authHeader.split(" ")[1];
  return jwt.verify(token, process.env.JWT_SECRET!) as any;
}
