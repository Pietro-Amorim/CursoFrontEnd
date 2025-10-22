"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [registros, setRegistros] = useState([]);
  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");
    if (!token) window.location.href = "/";
    setUsuario({ token, role });
  }, []);

  const registrarPonto = async () => {
    const res = await fetch("/api/pontos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ funcionarioId: usuario.id }),
    });
    if (res.ok) loadRegistros();
  };

  const loadRegistros = async () => {
    const res = await fetch(`/api/pontos?funcionarioId=${usuario?.id}`);
    const data = await res.json();
    setRegistros(data);
  };

  useEffect(() => {
    if (usuario) loadRegistros();
  }, [usuario]);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Bem-vindo ao Sistema de Ponto</h1>
      <button onClick={registrarPonto}>Registrar Ponto</button>

      <h2>Registros Recentes</h2>
      <ul>
        {registros.map((r: any, i) => (
          <li key={i}>{r.tipo} - {new Date(r.data).toLocaleString()}</li>
        ))}
      </ul>
    </main>
  );
}
