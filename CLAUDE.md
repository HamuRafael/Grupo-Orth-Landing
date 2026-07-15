# Grupo Orth — Landing Page Institucional

## O que é este projeto
Landing page institucional de página única para o **Grupo Orth**, uma marca do
agronegócio. Objetivo: apresentar quem são, o que produzem, história e valores.
O domínio oficial é orth.com.br. Instagram: @grupo.orth.

## Stack
- HTML, CSS e JavaScript **puros** (sem framework, sem build, sem dependências).
- Fontes via Google Fonts: Bricolage Grotesque (títulos), Instrument Sans (texto),
  Space Grotesk (números e etiquetas).
- Site estático: basta abrir o `index.html` no navegador. Não roda `npm`/build.

## Estrutura de arquivos
- `index.html` — estrutura e conteúdo de todas as seções.
- `css/styles.css` — toda a identidade visual. Variáveis de cor e fonte no `:root` no topo.
- `js/main.js` — interações (slideshow, animações, contadores, menu mobile).
- `assets/img/` — imagens de fundo (`hero-1.jpg` a `hero-4.jpg`). Hoje são PLACEHOLDERS.
- `assets/logo/` — onde vai a logo real (ainda não inserida).

## Seções da página (na ordem)
1. Header fixo com navegação (fica transparente sobre o hero e ganha fundo ao rolar).
2. Hero em tela cheia com slideshow de fotos que trocam sozinhas (efeito Ken Burns + crossfade), com "dots" para trocar manualmente.
3. Quem somos — história, texto ao lado de uma foto.
4. Nossas frentes de produção — 4 cartões em bloco único com cantos cortados (referência a talhões), ícones em SVG traço fino, número-fantasma no canto, e hover que inunda o card de verde de baixo pra cima.
5. Em números — contadores que animam de 0 até o valor quando entram na tela.
6. Galeria — faixa de fotos em loop infinito (pausa no hover).
7. Missão, visão e valores — tríade aberta separada por filetes, com traço dourado no topo e rótulo em mono (M/, V/, V/). Sem cards bege.
8. Rodapé (id="contato") — marca + tagline, contatos (telefone, e-mail, localização com ícones), e botões quadrados de redes sociais (Instagram, Facebook, LinkedIn, YouTube). NÃO há formulário de contato.

## Paleta (definida no :root do styles.css)
- Verdes: --green-900 #14261C, --green-800 #1B3A2B, --green-700 #244934, --green-600 #2E5A41, --green-500 #3D6B4A
- Dourados: --gold-500 #C9A24A, --gold-400 #D8B65E
- Neutros: --paper #F7F5EF, --paper-2 #EEEBE1, --ink #1C1A15, --ink-soft #4A473E

## Padrões e convenções
- Animações "aparecer ao rolar": qualquer elemento com a classe `reveal` (e `reveal-d1/d2/d3` para atraso). Controladas por IntersectionObserver no `main.js`.
- Respeitar `prefers-reduced-motion`: todas as animações já têm fallback. Manter isso ao adicionar novas.
- Ícones são SVG desenhados à mão (traço fino), NÃO usar emojis.
- Etiquetas amarelas tracejadas (`.placeholder-note`) marcam conteúdo