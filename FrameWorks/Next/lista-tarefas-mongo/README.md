<h1 align="center">
  📌 Lista de Tarefas – Next.js + MongoDB
</h1>

<p align="center">
  Aplicação de lista de tarefas (CRUD) desenvolvida com <b>Next.js</b> e <b>MongoDB</b>.<br/>
  Projeto estruturado em <b>controllers</b>, <b>models</b> e <b>services</b>.
</p>

---

## 🚀 Tecnologias

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
</p>

---

## ⚙️ Funcionalidades

- ✅ Criar tarefas  
- ✅ Listar todas as tarefas  
- ✅ Atualizar tarefas  
- ✅ Remover tarefas  

---

## 📂 Estrutura do Projeto

```
src/
 ├── app/                # Páginas e rotas do Next.js
 ├── controllers/        # Lógica de controle (CRUD)
 │    └── tarefaController.ts
 ├── models/             # Modelos do MongoDB (Mongoose)
 │    └── tarefa.ts
 ├── services/           # Conexão e serviços auxiliares
 │    └── mongodb.ts
 └── README.md
```

---

## ⚡ Como Rodar o Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/lista-tarefas-mongo.git

# 2. Acesse a pasta
cd lista-tarefas-mongo

# 3. Instale as dependências
npm install

# 4. Configure o arquivo .env.local
MONGODB_URI=sua_string_de_conexao

# 5. Rode o servidor
npm run dev

# 6. Abra no navegador
http://localhost:3000
```

---

## 🗄️ Exemplo de Tarefa (Model)

```ts
export interface ITarefa {
  titulo: string;
  descricao?: string;
  concluida: boolean;
}
```

---

## 🔮 Próximos Passos

- 🔐 Autenticação de usuários  
- 🔎 Filtros e busca de tarefas  
- ✅ Testes automatizados  

---

## 👨‍💻 Autor

Feito para estudos com **Next.js + MongoDB**.
