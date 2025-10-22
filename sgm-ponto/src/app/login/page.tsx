"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      let data: any = {};
      try {
        data = await res.json();
      } catch {}

      if (!res.ok) throw new Error(data.message || "Erro ao logar");

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      if (data.role === "admin") router.push("/admin");
      else router.push("/dashboard");
    } catch (err: any) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <div className="logo">
            <div className="logo-icon">⏰</div>
            <h1>ContaCerta</h1>
          </div>
          <p className="login-subtitle">Sistema de Ponto</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="login-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              disabled={loading}
              className="login-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="login-button"
          >
            {loading ? (
              <span className="loading">
                <div className="spinner"></div>
                Entrando...
              </span>
            ) : (
              "Entrar no sistema"
            )}
          </button>
        </form>

        {/* Error Message */}
        {erro && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {erro}
          </div>
        )}

        {/* Link para Registro */}
        <div className="register-link">
          <p>
            Não tem uma conta?{" "}
            <Link href="/register" className="register-link-text">
              Criar conta
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="login-footer">
          <p>Bem-vindo de volta</p>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .login-card {
          background: white;
          padding: 48px 40px;
          border-radius: 20px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .login-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .logo-icon {
          font-size: 28px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 12px;
          border-radius: 12px;
          color: white;
        }

        .logo h1 {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .login-subtitle {
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 4px;
        }

        .login-input {
          padding: 16px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.2s ease;
          background: #fafafa;
        }

        .login-input:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .login-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .login-button {
          padding: 16px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 8px;
        }

        .login-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }

        .login-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          color: #dc2626;
          font-size: 14px;
          margin-top: 20px;
        }

        .error-icon {
          font-size: 16px;
        }

        .register-link {
          text-align: center;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e5e7eb;
        }

        .register-link p {
          color: #6b7280;
          font-size: 14px;
          margin: 0;
        }

        .register-link-text {
          color: #667eea;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .register-link-text:hover {
          color: #764ba2;
          text-decoration: underline;
        }

        .login-footer {
          text-align: center;
          margin-top: 20px;
        }

        .login-footer p {
          color: #9ca3af;
          font-size: 12px;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 480px) {
          .login-card {
            padding: 32px 24px;
            margin: 0 16px;
          }
          
          .logo {
            flex-direction: column;
            gap: 8px;
          }
          
          .logo h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}