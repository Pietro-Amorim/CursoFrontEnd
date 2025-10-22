"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  });
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      // Validar senhas
      if (formData.senha !== formData.confirmarSenha) {
        throw new Error("As senhas não coincidem");
      }

      if (formData.senha.length < 6) {
        throw new Error("A senha deve ter pelo menos 6 caracteres");
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha
        }),
      });

      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "Erro ao criar conta");

      // Redirecionar para login com mensagem de sucesso
      router.push("/login?message=Conta criada com sucesso! Faça login.");
    } catch (err: any) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <main className="main">
        <div className="intro">
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ 
              fontSize: '48px', 
              marginBottom: '8px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ContaCerta
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>
              Criar Nova Conta
            </p>
          </div>

          <div style={{ width: '100%', maxWidth: '400px' }}>
            <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label htmlFor="nome" style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  Nome Completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '1px solid var(--button-secondary-border)',
                    borderRadius: '12px',
                    fontSize: '16px',
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s ease'
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '1px solid var(--button-secondary-border)',
                    borderRadius: '12px',
                    fontSize: '16px',
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s ease'
                  }}
                />
              </div>

              <div>
                <label htmlFor="senha" style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  Senha
                </label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '1px solid var(--button-secondary-border)',
                    borderRadius: '12px',
                    fontSize: '16px',
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s ease'
                  }}
                />
              </div>

              <div>
                <label htmlFor="confirmarSenha" style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontSize: '14px', 
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  Confirmar Senha
                </label>
                <input
                  id="confirmarSenha"
                  name="confirmarSenha"
                  type="password"
                  placeholder="Digite novamente sua senha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '1px solid var(--button-secondary-border)',
                    borderRadius: '12px',
                    fontSize: '16px',
                    backgroundColor: 'var(--foreground)',
                    color: 'var(--text-primary)',
                    transition: 'all 0.2s ease'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1,
                  transition: 'all 0.2s ease',
                  marginTop: '8px'
                }}
                onMouseOver={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid transparent',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Criando conta...
                  </span>
                ) : (
                  'Criar Conta'
                )}
              </button>
            </form>

            {erro && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                border: '1px solid rgba(220, 38, 38, 0.2)',
                borderRadius: '8px',
                color: '#dc2626',
                fontSize: '14px',
                marginTop: '20px'
              }}>
                <span>⚠️</span>
                {erro}
              </div>
            )}

            <div style={{ 
              textAlign: 'center', 
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid var(--button-secondary-border)'
            }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Já tem uma conta?{' '}
                <Link 
                  href="/login" 
                  style={{ 
                    color: '#667eea', 
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  Fazer login
                </Link>
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </main>
    </div>
  );
}