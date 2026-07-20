# Grupo Orth — Landing Page

Site institucional do **Grupo Orth** (agronegócio — grãos, algodão, pecuária e logística), no ar em [orth.com.br](https://orth.com.br). Página única, estática: HTML, CSS e JavaScript puros, sem build e sem dependências.

## Estrutura de pastas

```
Grupo-Orth-Landing/
├── index.html          ← estrutura e conteúdo de todas as seções
├── css/
│   └── styles.css      ← identidade visual (variáveis de cor e fonte no :root)
├── js/
│   └── main.js         ← slideshow do hero, animações de rolagem, menu mobile
├── assets/
│   ├── img/            ← fotos reais do grupo, otimizadas para web
│   └── logo/           ← logotipo oficial (azul e branca) + favicon
└── README.md
```

## Seções da página

1. **Header fixo** — transparente sobre o hero, ganha fundo claro ao rolar (a logo troca de branca para azul).
2. **Hero** — slideshow em tela cheia com crossfade; troca manual pelos dots ou setas ←/→ do teclado.
3. **Quem somos** — história do grupo (1985, Tapera/RS → Oeste Baiano).
4. **Frentes de produção** — grãos, fibras e beneficiamento, pecuária e logística (Transorth).
5. **Missão, visão e valores.**
6. **Vídeo** — "Conheça nossa história" (YouTube incorporado).
7. **Galeria** — faixa de fotos em loop infinito.
8. **Rodapé** — contatos e redes sociais (não há formulário de contato).

## Identidade visual

- Paleta baseada no manual da marca: **Pantone 661 C** (`#002F87`) + branco. Todas as variáveis ficam no `:root` do `css/styles.css`.
- Fonte única: **Montserrat** (Google Fonts).
- Ícones em SVG de traço fino, desenhados à mão.

## Como testar localmente

Abrir o `index.html` direto no navegador funciona para quase tudo, **exceto o vídeo do YouTube** (via `file://` ele dá erro 153). Para testar completo, sirva a pasta por HTTP:

```
python -m http.server 8080
```

e acesse http://localhost:8080.
