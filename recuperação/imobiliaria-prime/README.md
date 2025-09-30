# 📘 Documentação do Projeto – Imobiliária Prime

## 📖 Introdução

O **Imobiliária Prime** é uma aplicação web desenvolvida em **Angular** que simula uma plataforma de imobiliária online.  
A ideia é permitir que **clientes** naveguem pelos imóveis disponíveis, criem uma conta e expressem interesse em anúncios, enquanto **corretores** gerenciam seus próprios imóveis por meio de um painel administrativo.

O projeto foi construído com foco em boas práticas de desenvolvimento frontend: autenticação, autorização, guarda de rotas, componentização e integração com um backend simulado.

## 🎯 Objetivo

Desenvolver uma **SPA (Single Page Application)** moderna, responsiva e segura, que permita a interação entre dois perfis de usuário — **cliente** e **corretor** — com controle de acesso baseado em funções.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Angular (v15+), TypeScript, SCSS  
- **Backend simulado**: JSON Server  
- **Persistência de sessão**: `localStorage`  
- **Ferramentas**: Angular CLI, npm

## ⚙️ Funcionalidades

### Público (não logado)
- Visualizar a página inicial com imóveis em destaque  
- Acessar a página de detalhes de qualquer imóvel  
- Criar uma conta do tipo **cliente**

### Cliente (logado)
- Fazer login com e-mail e senha  
- Marcar imóveis como “Tenho Interesse”  
- Visualizar a lista de imóveis salvos  
- Editar seu próprio perfil (nome e senha)

### Corretor (logado)
- Fazer login com credenciais pré-cadastradas  
- Acessar o **dashboard** com seus imóveis  
- Realizar **CRUD completo** de imóveis (criar, ler, atualizar, excluir)  
- Visualizar quais **clientes demonstraram interesse** em cada imóvel

### Segurança
- **`AuthGuard`**: impede acesso a rotas privadas sem autenticação  
- **`CorretorGuard`**: permite acesso ao dashboard apenas para usuários do tipo *corretor*

## 📋 Requisitos

### Requisitos Funcionais
1. O sistema deve permitir cadastro e login de clientes.  
2. O sistema deve autenticar usuários e manter a sessão ativa.  
3. Clientes devem poder marcar interesse em imóveis.  
4. Todos os usuários devem visualizar os imóveis cadastrados.  
5. Apenas corretores podem criar, editar ou excluir imóveis.  
6. Clientes devem visualizar a lista de imóveis que marcaram como interesse.  
7. Corretores devem ver quais clientes se interessaram por cada imóvel.

### Requisitos Não Funcionais
1. A interface deve ser **responsiva** (funcionar bem em mobile e desktop).  
2. O frontend deve usar **Angular 15 ou superior**.  
3. O backend deve ser simulado com **JSON Server**.  
4. O tempo de resposta das operações deve ser **inferior a 2 segundos** (em ambiente local).  
5. O código deve seguir boas práticas: componentes reutilizáveis, serviços bem definidos e injeção de dependência.  
6. Apenas usuários autenticados devem acessar rotas protegidas.  
7. A sessão do usuário deve ser persistida com `localStorage`.

## 🗂️ Estrutura de Dados (`db.json`)

```json
{
  "usuarios": [
    {
      "id": 1,
      "nome": "Carlos Corretor",
      "email": "corretor@prime.com",
      "senha": "123",
      "tipo": "corretor"
    },
    {
      "id": 2,
      "nome": "Ana Cliente",
      "email": "cliente@email.com",
      "senha": "123",
      "tipo": "cliente"
    }
  ],
  "imoveis": [
    {
      "id": 1,
      "titulo": "Apartamento com vista para o mar",
      "corretorId": 1,
      "tipo": "Apartamento",
      "cidade": "Santos",
      "preco": 750000,
      "descricao": "Lindo apartamento com 3 quartos, sacada gourmet e vista para o mar.",
      "imagemUrl": "assets/imoveis/apto-mar.jpg"
    }
  ],
  "interesses": [
    {
      "id": 1,
      "clienteId": 2,
      "imovelId": 1
    }
  ]
}
```

## 📊 Diagramas

### Diagrama de Casos de Uso

```mermaid
%%{init: {"theme": "default"}}%%
usecaseDiagram
actor Visitante
actor Cliente
actor Corretor

Visitante --> (Visualizar página inicial)
Visitante --> (Visualizar detalhes de imóvel)
Visitante --> (Cadastrar conta cliente)

Cliente --> (Fazer login)
Cliente --> (Marcar interesse em imóvel)
Cliente --> (Visualizar imóveis salvos)
Cliente --> (Editar perfil)

Corretor --> (Fazer login)
Corretor --> (Gerenciar imóveis)
Corretor --> (Visualizar clientes interessados)

(Visualizar página inicial) --> (Visualizar detalhes de imóvel) : <<include>>
(Cadastrar conta cliente) --> (Fazer login) : <<include>>

### Diagrama de Classes

```

```mermaid
classDiagram
    class Usuario {
        +int id
        +string nome
        +string email
        +string senha
        +string tipo
    }

    class Imovel {
        +int id
        +string titulo
        +string tipo
        +string cidade
        +number preco
        +string descricao
        +string imagemUrl
        +int corretorId
    }

    class Interesse {
        +int id
        +int clienteId
        +int imovelId
    }

    Usuario "1" *-- "0..N" Imovel : cadastra
    Usuario "1" *-- "0..N" Interesse : manifesta
    Imovel "1" *-- "0..N" Interesse : recebe
```

### Diagrama de Fluxo (Login e Navegação)

```mermaid
flowchart TD
    A[Acesso à aplicação] --> B{Usuário está logado?}
    B -- Não --> C[Visitante]
    C --> D[Visualizar imóveis]
    C --> E[Criar conta]
    C --> F[Fazer login]

    B -- Sim --> G{Tipo de usuário?}
    G -- Cliente --> H[Área do Cliente]
    G -- Corretor --> I[Dashboard do Corretor]

    H --> J[Visualizar imóveis]
    H --> K[Marcar interesse]
    H --> L[Ver imóveis salvos]
    H --> M[Editar perfil]

    I --> N[Gerenciar imóveis]
    I --> O[Ver clientes interessados]

    F --> P{Credenciais válidas?}
    P -- Sim --> G
    P -- Não --> Q[Exibir erro de login]
    Q --> F
```

## 📌 Conclusão

O **Imobiliária Prime** demonstra, de forma prática e didática, como construir uma aplicação Angular com múltiplos perfis de usuário, controle de acesso e integração com API.  
Apesar de usar um backend simulado e autenticação simplificada, o projeto segue boas práticas de arquitetura, segurança e usabilidade — servindo como base sólida para sistemas reais.
