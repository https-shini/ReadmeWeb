<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6&height=140&section=header&text=Portfolio&fontSize=42&fontColor=fff&animation=fadeIn&fontAlignY=55&desc=Guilherme%20Cruz%20·%20Desenvolvedor%20de%20Software&descAlignY=75&descAlign=50"/>

<br/>

[![Deploy](https://img.shields.io/badge/Deploy-Live-46e8b0?style=for-the-badge&logo=vercel&logoColor=white)](https://bl4ck404.dev.br)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Licença](https://img.shields.io/badge/Licença-MIT-ff6b6b?style=for-the-badge)](#licença)

</div>

---

## 📋 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Demonstração](#-demonstração)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Tecnologias](#-tecnologias)
- [Como executar](#-como-executar)
- [Seções](#-seções)
- [Acessibilidade](#-acessibilidade)
- [Autor](#-autor)

---

## 💡 Sobre o projeto

Portfólio pessoal desenvolvido do zero com **HTML5, CSS3 e JavaScript puro**, sem frameworks ou dependências externas. O projeto foi construído com foco em **qualidade de código, acessibilidade e performance**, apresentando minha trajetória acadêmica e profissional, projetos em destaque e formas de contato.

O design segue um sistema de tokens CSS bem definido, suporta **tema claro e escuro** com persistência via `localStorage`, e implementa boas práticas de acessibilidade como ARIA, skip links e navegação por teclado.

---

## 🌐 Demonstração

> Acesse o portfólio em produção:

**[→ bl4ck404.dev.br](https://bl4ck404.dev.br)**

---

## ✨ Funcionalidades

- **Tema claro/escuro** com persistência via `localStorage` e respeito à preferência do sistema (`prefers-color-scheme`)
- **Menu mobile** com drawer animado, focus trap e fechamento por Escape
- **Scroll spy** com `IntersectionObserver` para highlight do link ativo na navegação
- **Animações de reveal** ao rolar a página, usando `IntersectionObserver` (sem scroll event)
- **Parallax suave** no hero, respeitando `prefers-reduced-motion`
- **Botão scroll-to-top** com visibilidade dinâmica e animação de transição
- **Skip link** para usuários de leitores de tela e navegação por teclado
- **Ano dinâmico** no footer via JavaScript

---

## 📁 Estrutura do projeto

```
portfolio/
│
├── index.html        # Estrutura semântica completa com ARIA
├── style.css         # Design tokens, temas, componentes e responsividade
├── script.js         # Interações, animações e acessibilidade
│
├── avatar.png        # Avatar 3D para uso no hero
├── hero.png          # Foto real para uso alternativo no hero
│
└── certificates/
    ├── CC50.pdf               # Ciência da Computação de Harvard no Brasil
    ├── certificate.pdf        # Rocketseat — Discover (12h)
    ├── modelagem-de-dados.pdf # Fundação Bradesco — Modelagem de Dados (8h)
    └── etec.pdf               # Diploma ETEC — Técnico em ADS
```

---

## 🛠 Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica, ARIA, acessibilidade |
| **CSS3** | Design tokens, temas, animações, responsividade |
| **JavaScript (ES2020+)** | IntersectionObserver, localStorage, módulo de utilidades |
| **Google Fonts** | Syne (display) + Space Mono (código) |
| **Vanilla JS** | Sem jQuery, sem frameworks — zero dependências |

---

## 🚀 Como executar

Por ser um projeto estático, basta clonar e abrir no navegador:

```bash
# Clone o repositório
git clone https://github.com/https-shini/portfolio.git

# Acesse a pasta
cd portfolio

# Abra o arquivo principal
# Opção 1 — abrir direto no navegador
open index.html

# Opção 2 — usar Live Server (extensão do VSCode recomendada)
# Instale a extensão "Live Server" e clique em "Go Live"
```

> **Nenhuma instalação de dependências necessária.** O projeto é 100% estático.

---

## 📄 Seções

| # | Seção | Descrição |
|---|---|---|
| 01 | **Sobre mim** | Apresentação em formato de bloco de código Python |
| 02 | **Tecnologias** | Cards com Frontend, Backend, Dados, Ferramentas, Design e SO |
| 03 | **Projetos** | 6 projetos com links de repositório e deploy ao vivo |
| 04 | **Jornada** | Formação acadêmica e experiência profissional em tabelas |
| 05 | **Objetivos** | Metas para 2025–2026 com status de andamento |
| 06 | **Contato** | Links para Portfolio, LinkedIn e Email |

---

## ♿ Acessibilidade

Este projeto foi desenvolvido com acessibilidade como prioridade, não como afterthought:

- ✅ Marcação semântica completa (`<main>`, `<header>`, `<nav>`, `<footer>`, `<article>`)
- ✅ Atributos ARIA em todos os elementos interativos
- ✅ Skip link para pular para o conteúdo principal
- ✅ Focus trap no menu mobile
- ✅ Navegação completa por teclado (Tab, Escape, Enter)
- ✅ Respeito a `prefers-reduced-motion` no parallax
- ✅ Contraste adequado em ambos os temas
- ✅ Tabelas com `scope="col"` e `aria-label` adequados

---

## 👤 Autor

<div align="center">

**Guilherme de Souza Cruz**  
Desenvolvedor de Software · Estudante de Ciência da Computação  
São Paulo, SP — Brasil

[![Portfolio](https://img.shields.io/badge/Portfolio-311DB4?style=for-the-badge)](https://bl4ck404.dev.br)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-3E79E0?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/oguilherme-cruz)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@bl4ck404.dev.br)

</div>

---

## 📜 Licença

Distribuído sob a licença **MIT**. Veja `LICENSE` para mais informações.

---

<div align="center">

*Feito com ♥ em São Paulo*

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6&height=100&section=footer"/>

</div>
