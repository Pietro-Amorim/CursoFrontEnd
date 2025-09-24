# Sistema de Gestão de Manutenção

## Briefing

### Visão Geral do progeto

- O projeto consiste no desenvolvimento de um Sistema de Gestão de Manutenção (SGM) no formato de uma aplicação web.

## Escopo

- ## Objetivos:

- ## Público-Alvo:
    - Técnicos de Manutenção
    - Gestores de Manutenção
    - Administradores do Sistema

- ### Recursos Tecnológicos:

## Diagramas (Mermaid, Miro, Draw.io)

1. ### Diagrama de Classe

- Este diagrama modela as principais entidades do sistema:
    - Usuários (Users/Usuarios) 
        - Campo:  Adm || User;
    - Máquinas/Equipamentos(Equipment);
    - Ordem de Serviço (Service);

```mermaid

classDiagram

    class Usuario{
        +String id
        +String nome
        +String email
        +String senha
        +String funcao
        +login()
        +logout()
        +create()
        +read()
        +update()
        +delete()
    }

    class Equipamento{
        +String id
        +String nome
        +String modelo
        +String numeroSerie
        +String localizacao
        +String status
        +create()
        +read()
        +update()
        +delete()
    }

    class OrdemServico{
        +String id
        +string titulo
        +String descricao
        +String tipoManutencao
        +String status
        +String idTecnico
        +String IdEquipamento
        +create()
        +read()
        +update()
        +delete()
    }

    Usuario "1" -- "1+" OrdemServico : "é resposável por"
    Equipamento "1" -- "1+" OrdemServico : "associado a"
```

#### Explicação do Diagrama de Classe
 - Um Usuário (Técnico) por ser responsável por várias Ordens de Servico
 - Um Equipamento por estar associado a várias Ordens de Serviço

 2. ### Diagrama de Caso de Uso
 Ilustrar as interações dos diferentes tipos de usuários (atores) com as funcionalidades do sistema

#### Explicação:
- Atores: Técnico, Gestor, Admin

- Casos de Usos:
    - Técnico: Gerenciar Ordens de Servico (CRUD) e acessar o DashBoard
    - Gestor: Gerenciar Ordens de Serviço (CRUD) , Gerenciar Equipamento (CRUD), Acessar o DashBoard
    -Admin: Gerenciar Usuário, acessar o DashBoard

    Fazer o Login -> Antes de Qualquer Ação

```mermaid
graph TD
    subgraph "SGM"
        uc1([Fazer Login])
        uc2([Gerenciar Ordens de Serviço - CRUD])
        uc3([Gerenciar Equipamentos - CRUD])
        uc4([Gerenciar Usuário])
        uc5([Acessar o DashBoard])
    end

    Tecnico([Técnico de Manutenção])
    Gestor([Gerente de Manutenção])
    Admin([Administrador do Sistema])

    Tecnico --> uc1 
    Tecnico --> uc3
    Tecnico --> uc5

    Gestor --> uc1
    Gestor --> uc2
    Gestor --> uc3
    Gestor --> uc5

    Admin --> uc1
    Admin --> uc4
    Admin --> uc5

    uc2 -.-> uc1
    uc3 -.-> uc1
    uc4 -.-> uc1
    uc5 -.-> uc1

```

3. ### Diagram de Fluxo (Login e Acesso ao Dashboard)
Detalhar o passo a passo que um usuário segue para se autenticar no sistema a acessar o dashboard

#### Explicação:
- O Fluxo começa quando osuário acessa a tela de login
- Insere as credenciais( email e senha)
- O sistema verifica se as credenciais são válidas
    - se sim: gera um JWT (token) => dashboard
    - se não: mensagem de erro eusuário permanece na tela de l
    login

```mermaid

graph TD
    A[Início] --> B{Acessa a Tela de Login}
    B --> C[Preencher Email e Senha]
    C --> D{Valida as Credenciais}
    D --> Sim --> E[Gera um Token JWT]
    E --> F[DashBoard]
    D --> Não --> K[Mensagem de Erro]
    K --> B
    
```