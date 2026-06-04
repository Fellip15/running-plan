# Plano Corrida Maneira 🏃‍♀️✨

Site estático com plano de corrida (zero → 5km) de **2026-06-08 até 2026-12-27**, com 6 temas de anime/animação.

## Como rodar localmente

Não precisa de servidor. Abre o `index.html` no navegador:

```sh
open index.html
```

Se preferir um servidor local rapidinho:

```sh
python3 -m http.server 8000
# depois abre http://localhost:8000
```

## Como publicar no GitHub Pages

1. Cria um repo público no GitHub (ex.: `running-plan`).
2. Push do conteúdo desta pasta:
   ```sh
   git init
   git add .
   git commit -m "primeira versão"
   git branch -M main
   git remote add origin git@github.com:<seu-usuário>/running-plan.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Source: `main` / `(root)`** → Save.
4. Em ~1 min o site fica disponível em `https://<seu-usuário>.github.io/running-plan/`.

Atualizações: edita, `git push`, autodeploy.

## Estrutura

```
index.html               página única
styles/base.css          layout, tipografia, dropdown — agnóstico de tema
styles/themes.css        6 temas (variáveis CSS)
scripts/plan.js          plano de 29 semanas (fonte da verdade)
scripts/themes.js        metadados dos temas + frases motivacionais
scripts/app.js           render, troca de tema, persistência (localStorage)
scripts/confetti.js      confete em canvas
```

## Trocar/adicionar tema

1. **Adiciona o bloco CSS** em `styles/themes.css`:
   ```css
   [data-theme='novo'] {
     --bg: #...;
     --text: #...;
     --accent: #...;
     --accent-2: #...;
     --card-bg: #...;
     --card-border: #...;
     --card-shadow: ...;
     --font-display: '...';
     --font-body: '...';
   }
   ```
2. **Adiciona o objeto** em `scripts/themes.js`:
   ```js
   {
     id: 'novo',
     label: 'Nome bonito 🍣',
     mascot: '🍣',
     quotes: ['frase 1', 'frase 2', '...'],
   }
   ```
3. Se for usar uma fonte do Google nova, inclui ela na tag `<link>` lá no `index.html`.

Pronto. Recarrega a página e o tema aparece no dropdown.

## Editar o plano

Tudo está em `scripts/plan.js`. Cada item:

```js
W(numeroDaSemana, 'data – data', 'A|B|C|D', 'resumo curto', [
  'sessão 1',
  'sessão 2',
  'sessão 3 (bônus)',
]);
```

A "semana atual" é calculada automaticamente a partir de `START_DATE` (constante no topo do arquivo).
