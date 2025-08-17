# Todo List (Angular)

Um Todo List simples para uso diário e primeiro contato com **Angular** — com UI limpa em preto & branco, persistência em **localStorage** e validação básica de formulário.

- **Live:** https://todo-list-ln.vercel.app/  
- **Repositório:** https://github.com/ZNitr0/Todo_List

---

## ✨ Funcionalidades

- Adicionar tarefas (validação: **3–60** caracteres)
- Marcar como **concluída** e **refazer**
- **Remover** tarefas
- Numeração visual **1., 2., 3…** (sem exibir o id interno)
- Persistência em **localStorage**
- Layout **soft e centralizado** com _cards_ e botões (PB)

---

## 🧰 Stack

- **Angular** (gerado com *Angular CLI 7.3.10*)
- **TypeScript**
- **CSS** (estilos globais em `src/styles.css`)
- **localStorage** para persistência
- **Vercel** (deploy)

> O projeto original foi criado com Angular CLI 7.3.10.

---

## 🖼️ UI / Design

A UI é “soft” (preto & branco) e usa classes globais reutilizáveis:

- `:root` com *tokens* (radius, shadow etc.)
- `.container` para largura máxima/centralização
- `.card` para caixas (tarefas e formulário)
- `.btn` (primário, escuro) e `.btn-ghost` (secundário, claro)
- `.input` para campos
- `.task` para **cards pequenos e centralizados**
- `.todo-*` para as partes do item (número, título, ações)

> Os estilos estão em `src/styles.css`. O `app.component.css` pode ficar vazio.

---

## 🗂️ Estrutura (essencial)

src/
app/
app.component.ts # lógica (FormBuilder, ações, localStorage)
app.component.html # template (lista, botões, formulário)
app.component.css # (opcional) – mantemos estilos no global
model/
todo.model.ts # interface Todo { id, title, done }
styles.css # estilos globais (tokens, cards, botões, etc.)
