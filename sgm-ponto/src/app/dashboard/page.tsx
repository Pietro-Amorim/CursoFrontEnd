"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Registro {
  _id: string;
  tipo: "entrada" | "saida";
  data: string;
  time: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [usuario, setUsuario] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [registrando, setRegistrando] = useState(false);
  const [proximoRegistro, setProximoRegistro] = useState<"entrada" | "saida">("entrada");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("userRole");
    
    if (!token) {
      router.push("/");
      return;
    }

    // Simular dados do usuário - na implementação real viria da API
    setUsuario({ 
      token, 
      role: userRole,
      id: "user-id", // Isso deve vir da API
      nome: "Funcionário" 
    });
  }, [router]);

  const calcularProximoRegistro = (registros: Registro[]) => {
    if (registros.length === 0) return "entrada";
    
    const ultimoRegistro = registros[0];
    return ultimoRegistro.tipo === "entrada" ? "saida" : "entrada";
  };

  const registrarPonto = async () => {
    if (!usuario) return;
    
    setRegistrando(true);
    try {
      const res = await fetch("/api/pontos", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${usuario.token}`
        },
        body: JSON.stringify({ 
          funcionarioId: usuario.id,
          tipo: proximoRegistro
        }),
      });

      if (res.ok) {
        await loadRegistros();
      } else {
        throw new Error("Erro ao registrar ponto");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao registrar ponto");
    } finally {
      setRegistrando(false);
    }
  };

  const loadRegistros = async () => {
    if (!usuario) return;
    
    try {
      const res = await fetch(`/api/pontos?funcionarioId=${usuario.id}`, {
        headers: {
          "Authorization": `Bearer ${usuario.token}`
        }
      });
      
      if (res.ok) {
        const data = await res.json();
        setRegistros(data);
        setProximoRegistro(calcularProximoRegistro(data));
      }
    } catch (error) {
      console.error("Erro ao carregar registros:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (usuario) {
      loadRegistros();
    }
  }, [usuario]);

  const calcularTotalHoras = () => {
    let totalMinutos = 0;
    
    for (let i = 0; i < registros.length; i += 2) {
      const entrada = registros[i];
      const saida = registros[i + 1];
      
      if (entrada && saida && entrada.tipo === "entrada" && saida.tipo === "saida") {
        const entradaTime = new Date(`${entrada.data}T${entrada.time}`);
        const saidaTime = new Date(`${saida.data}T${saida.time}`);
        const diffMs = saidaTime.getTime() - entradaTime.getTime();
        totalMinutos += diffMs / (1000 * 60);
      }
    }
    
    const horas = Math.floor(totalMinutos / 60);
    const minutos = Math.floor(totalMinutos % 60);
    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
  };

  const formatarData = (data: string, time: string) => {
    return new Date(`${data}T${time}`).toLocaleString('pt-BR');
  };

  if (loading) {
    return (
      <div className="page">
        <main className="main">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '200px' 
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid var(--button-secondary-border)',
              borderTop: '3px solid #667eea',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <main className="main" style={{ maxWidth: '800px', gap: '40px' }}>
        {/* Header */}
        <div style={{ width: '100%' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '32px'
          }}>
            <div>
              <h1 style={{ 
                fontSize: '32px', 
                marginBottom: '8px',
                color: 'var(--text-primary)'
              }}>
                Olá, {usuario?.nome}!
              </h1>
              <p style={{ color: 'var(--text-secondary)' }}>
                Bem-vindo ao sistema de ponto
              </p>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("userRole");
                router.push("/");
              }}
              style={{
                padding: '8px 16px',
                border: '1px solid var(--button-secondary-border)',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Sair
            </button>
          </div>

          {/* Card de Registro */}
          <div style={{
            backgroundColor: 'var(--foreground)',
            padding: '32px',
            borderRadius: '16px',
            border: '1px solid var(--button-secondary-border)',
            textAlign: 'center',
            marginBottom: '32px'
          }}>
            <h2 style={{ 
              fontSize: '18px', 
              marginBottom: '16px',
              color: 'var(--text-secondary)',
              fontWeight: '500'
            }}>
              Próximo registro
            </h2>
            
            <div style={{
              fontSize: '48px',
              fontWeight: '700',
              marginBottom: '24px',
              background: proximoRegistro === 'entrada' 
                ? 'linear-gradient(135deg, #10B981, #059669)'
                : 'linear-gradient(135deg, #EF4444, #DC2626)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {proximoRegistro === 'entrada' ? 'ENTRADA' : 'SAÍDA'}
            </div>

            <button
              onClick={registrarPonto}
              disabled={registrando}
              style={{
                width: '100%',
                maxWidth: '200px',
                padding: '16px 32px',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                cursor: registrando ? 'not-allowed' : 'pointer',
                opacity: registrando ? 0.7 : 1,
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                if (!registrando) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                }
              }}
              onMouseOut={(e) => {
                if (!registrando) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {registrando ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid transparent',
                    borderTop: '2px solid white',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Registrando...
                </span>
              ) : (
                '📅 Registrar Ponto'
              )}
            </button>
          </div>
        </div>

        {/* Seção de Registros */}
        <div style={{ width: '100%' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h2 style={{ 
              fontSize: '24px',
              color: 'var(--text-primary)'
            }}>
              Seus Registros
            </h2>
            
            {registros.length >= 2 && (
              <div style={{
                padding: '8px 16px',
                backgroundColor: 'var(--button-secondary-hover)',
                borderRadius: '8px',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                fontWeight: '500'
              }}>
                Total: {calcularTotalHoras()}
              </div>
            )}
          </div>

          {registros.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '48px 24px',
              color: 'var(--text-secondary)',
              border: '2px dashed var(--button-secondary-border)',
              borderRadius: '12px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
              <p>Nenhum registro encontrado</p>
              <p style={{ fontSize: '14px', marginTop: '8px' }}>
                Clique em "Registrar Ponto" para começar
              </p>
            </div>
          ) : (
            <div style={{
              backgroundColor: 'var(--foreground)',
              borderRadius: '12px',
              border: '1px solid var(--button-secondary-border)',
              overflow: 'hidden'
            }}>
              {registros.map((registro, index) => (
                <div
                  key={registro._id}
                  style={{
                    padding: '20px 24px',
                    borderBottom: index < registros.length - 1 ? '1px solid var(--button-secondary-border)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--button-secondary-hover)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '4px'
                    }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '600',
                        backgroundColor: registro.tipo === 'entrada' 
                          ? 'rgba(16, 185, 129, 0.1)' 
                          : 'rgba(239, 68, 68, 0.1)',
                        color: registro.tipo === 'entrada' ? '#059669' : '#DC2626'
                      }}>
                        {registro.tipo === 'entrada' ? '🟢 ENTRADA' : '🔴 SAÍDA'}
                      </span>
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)'
                    }}>
                      {formatarData(registro.data, registro.time)}
                    </div>
                  </div>
                  
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'var(--text-primary)'
                  }}>
                    {registro.time}
                  </div>
                </div>
              ))}
            </div>
          )}
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