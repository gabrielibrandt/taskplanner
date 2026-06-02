# 📋 Task Planner

Projeto Full Stack desenvolvido para praticar conceitos fundamentais de desenvolvimento web utilizando HTML, CSS, JavaScript e C# com ASP.NET Core.

## 🚀 Funcionalidades

* Adicionar tarefas
* Definir duração estimada para cada tarefa
* Marcar tarefa como concluída
* Desfazer conclusão
* Excluir tarefas
* Contador de tarefas
* Tema claro/escuro
* Interface responsiva

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API

### Backend

* C#
* ASP.NET Core Web API

---

## 📁 Estrutura do Projeto

```txt
TaskPlanner/

├── backend/
│   ├── Controllers/
│   │   └── TasksController.cs
│   │
│   ├── Models/
│   │   └── TaskItem.cs
│   │
│   ├── Program.cs
│   └── Backend.csproj
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## 📚 Conceitos Aplicados

### HTML

* Estrutura semântica
* Formulários
* Inputs
* Botões

### CSS

* Grid Layout
* Flexbox
* Responsividade
* Variáveis CSS
* Dark Mode

### JavaScript

* Manipulação do DOM
* Async/Await
* Fetch API
* Eventos
* Manipulação de Classes

### C#

* Classes e Objetos
* Propriedades
* Booleanos (bool)
* List<T>
* Controllers
* Métodos HTTP

### API REST

* GET
* POST
* PUT
* DELETE

---

## 🔗 Endpoints

### Listar tarefas

```http
GET /api/tasks
```

### Criar tarefa

```http
POST /api/tasks
```

Exemplo:

```json
{
  "title": "Estudar C#",
  "duration": "1 hora",
  "completed": false
}
```

### Concluir / Desfazer tarefa

```http
PUT /api/tasks/{id}
```

### Excluir tarefa

```http
DELETE /api/tasks/{id}
```

---

## ▶️ Como Executar

### Backend

Entre na pasta do backend:

```bash
cd backend
```

Execute:

```bash
dotnet restore
dotnet run
```

A API ficará disponível em:

```txt
http://localhost:PORTA
```

Substitua `PORTA` pela porta exibida no terminal.

---

### Frontend

Abra a pasta Frontend no VS Code e execute utilizando a extensão Live Server.

Verifique se a URL da API em `script.js` corresponde à porta do backend:

```javascript
const API = "http://localhost:5228/api/tasks";
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para consolidar conhecimentos de desenvolvimento Full Stack, demonstrando integração entre frontend e backend, manipulação de dados via API REST e utilização dos principais métodos HTTP.

Além disso, foram aplicados conceitos de interface moderna, tema claro/escuro e gerenciamento simples de tarefas.

---

## 💡 Melhorias Futuras

* Persistência em banco de dados
* Edição de tarefas
* Filtro por concluídas/pendentes
* Pesquisa de tarefas

---

## 👨‍💻 Autor

Desenvolvido por Gabrieli para fins de estudo, portfólio e organização pessoal.
