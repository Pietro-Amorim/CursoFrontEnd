# 📘 Documentação do Projeto – Imobiliária Prime
# Esboço & Requisitos

## 📖 Introdução  
O projeto **Imobiliária Prime** é uma aplicação web desenvolvida em **Angular**, com foco no uso de **autenticação, autorização e guardas de rota**.  
A aplicação simula uma plataforma de imobiliária, onde **clientes podem buscar imóveis e marcar interesse**, enquanto **corretores podem cadastrar e gerenciar seus anúncios**.  

---

## 🎯 Objetivo  
Criar uma **SPA (Single Page Application)** moderna, responsiva e segura, que atenda às necessidades de interação entre clientes e corretores de imóveis.  

---

## 🛠️ Tecnologias Utilizadas  
- **Angular** (Frontend)  
- **TypeScript** e **SCSS**  
- **JSON Server** (Backend simulado)  
- **LocalStorage / SessionStorage** (controle de sessão)  

---

## ⚙️ Funcionalidades  

### Público (não logado)  
- Visualizar página inicial com imóveis em destaque.  
- Consultar detalhes de um imóvel.  
- Criar conta de **Cliente**.  

### Cliente (logado)  
- Login e autenticação.  
- Marcar imóveis como "Tenho Interesse".  
- Visualizar lista de imóveis salvos.  
- Editar informações de perfil.  

### Corretor (logado)  
- Login (contas criadas por administrador).  
- Dashboard com seus próprios imóveis.  
- CRUD completo de anúncios (criar, editar e excluir imóveis).  
- Visualizar clientes interessados em seus imóveis.  

### Segurança  
- **AuthGuard**: garante que apenas usuários logados acessem áreas restritas.  
- **CorretorGuard**: permite acesso ao dashboard apenas para corretores.  

---

## 🗂️ Estrutura de Dados (db.json)  
```json
{
  "usuarios": [
    { "id": 1, "nome": "Carlos Corretor", "email": "corretor@prime.com", "senha": "123", "tipo": "corretor" },
    { "id": 2, "nome": "Ana Cliente", "email": "cliente@email.com", "senha": "123", "tipo": "cliente" }
  ],
  "imoveis": [
    {
      "id": 1,
      "titulo": "Apartamento com vista para o mar",
      "corretorId": 1,
      "tipo": "Apartamento",
      "cidade": "Santos",
      "preco": 750000,
      "descricao": "Lindo apartamento com 3 quartos...",
      "imagemUrl": "url_da_imagem.jpg"
    }
  ],
  "interesses": [
    { "id": 1, "clienteId": 2, "imovelId": 1 }
  ]
}
```  

---

## ▶️ Como Executar o Projeto  

1. **Clone o repositório:**  
   ```bash
   git clone https://github.com/seu-usuario/imobiliaria-prime.git
   ```  

2. **Instale as dependências:**  
   ```bash
   npm install
   ```  

3. **Inicie o backend simulado (JSON Server):**  
   ```bash
   npx json-server --watch db.json --port 3000
   ```  

4. **Rode a aplicação Angular:**  
   ```bash
   ng serve
   ```  

5. Acesse no navegador:  
   ```
   http://localhost:4200
   ```  

---

## 📌 Conclusão  

O projeto **Imobiliária Prime** demonstra a aplicação prática dos conceitos de **componentização, serviços, injeção de dependência, guardas de rota e integração com backend simulado** no Angular.  
Com a diferenciação entre perfis de usuário (**cliente e corretor**) e a aplicação de regras de segurança, a aplicação fornece uma experiência funcional e próxima de um sistema real.  