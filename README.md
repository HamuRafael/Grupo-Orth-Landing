# Grupo Orth — Landing Page (v1)

Landing page institucional estática. Sem build, sem dependências: é só abrir o `index.html` no navegador.

## Estrutura de pastas

```
grupo-orth-site/
├── index.html          ← estrutura e conteúdo da página
├── css/
│   └── styles.css      ← toda a identidade visual (cores, fontes, layout)
├── js/
│   └── main.js         ← menu mobile, ano do rodapé, formulário
├── assets/
│   ├── img/            ← coloque aqui as fotos (hero, lavouras, fundadores)
│   └── logo/           ← coloque aqui a logo do Grupo Orth
└── README.md
```

## Como abrir
Dê dois cliques em `index.html`. Só isso. Para ver alterações, salve o arquivo e atualize o navegador (F5).

## O que trocar (procure os comentários "TROCAR" e as etiquetas amarelas no site)

1. **Logo** — salve em `assets/logo/` e troque o bloco `.brand` no `index.html` por uma `<img>`.
2. **Cores** — todas ficam no topo do `css/styles.css`, no bloco `:root`. Ajuste os hex para a paleta oficial deles.
3. **Foto/vídeo do topo (hero)** — em `styles.css`, na regra `.hero-media`, troque o gradiente por `background-image: url('../assets/img/hero.jpg');`. Para vídeo, dá pra usar uma tag `<video>` no lugar da `<div class="hero-media">`.
4. **Textos** — história, números, missão/visão/valores e contato estão todos no `index.html`, com etiquetas marcando o que é provisório.
5. **Fotos das seções** — troque os blocos `.img-placeholder` por `<img src="assets/img/....jpg" alt="...">`.

## Formulário de contato
Hoje ele só valida e mostra uma mensagem — **não envia** ainda. Para funcionar de verdade, o caminho mais simples sem back-end é o **Formspree** (formspree.io): você cria um endpoint gratuito e aponta o `action` do formulário para ele. Alternativa: **EmailJS**. Se preferirem back-end próprio, dá pra evoluir depois.

## Como publicar (o domínio orth.com.br já é deles)
Como o site é estático, qualquer uma destas opções funciona:
- **Netlify / Vercel / Cloudflare Pages** (grátis): arrasta a pasta, publica, e aponta o domínio `orth.com.br` no DNS. Recomendado.
- **Hospedagem atual via FTP**: sobe os arquivos direto na raiz do site.

## Próximos passos sugeridos
- Trocar todos os placeholders pelo material real (logo, fotos, textos, números).
- Conectar o formulário.
- (Opcional) Migrar para **Astro** quando quiserem várias páginas, blog ou área de notícias — a base visual pode ser reaproveitada.
