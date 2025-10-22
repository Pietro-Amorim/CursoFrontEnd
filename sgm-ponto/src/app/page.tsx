"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userRole", data.role);
      window.location.href = "/dashboard";
    } else {
      alert(data.error || "Erro ao logar");
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Login - Sistema de Ponto</h1>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} /><br />
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
