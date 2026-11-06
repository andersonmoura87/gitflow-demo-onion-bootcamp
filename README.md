# Onion Git Flow Demo

Projeto de estudo do Onion Bootcamp para praticar Git Flow. A página é apenas uma demonstração estática; não é uma aplicação real.

## Estrutura

```text
.
├── README.md
├── index.html
├── styles.css
└── app.js
```

Abra `index.html` no navegador para ver a demonstração.

## Branches

- `main`: versão estável do projeto.
- `develop`: integração das mudanças aprovadas.
- `feature/<nome>`: desenvolvimento de uma mudança a partir de `develop`.

Fluxo:

```text
feature/* -> Pull Request -> develop -> Pull Request de release -> main
```

Não faça alterações diretamente em `main` ou `develop`.

Para iniciar uma feature:

```shell
git switch develop
git pull origin develop
git switch -c feature/nome-da-feature
```

Publique a branch e abra um Pull Request para `develop`. Após revisão e validação, integre a mudança. Quando `develop` estiver pronto para uma versão, abra outro Pull Request para `main`.

## Commits

Use Conventional Commits para manter o histórico claro:

```text
docs: organiza a documentação do projeto
feat: demonstra as etapas do gitflow
style: melhora a apresentação da página
fix: corrige o texto do cabeçalho
```

## Pull Request

**Título:** `tipo: resumo objetivo da mudança`

```markdown
## Objetivo
O que esta mudança resolve ou demonstra?

## Alterações
- O que foi modificado?

## Verificação
Como a mudança foi verificada?
```
