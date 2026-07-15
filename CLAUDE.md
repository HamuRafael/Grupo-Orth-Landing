# Grupo Orth — Landing Page Institucional

## O que é este projeto
Landing page institucional de página única para o **Grupo Orth**, uma marca do
agronegócio. Objetivo: apresentar quem são, o que produzem, história e valores.
O domínio oficial é orth.com.br. Instagram: @grupo.orth.

## Stack
- HTML, CSS e JavaScript **puros** (sem framework, sem build, sem dependências).
- Fonte oficial via Google Fonts: **Montserrat** (todos os pesos; `Montserrat Thin`/weight 100
  é usada no "grupo" do logotipo). Uma única família para títulos, texto, números e etiquetas.
- Site estático: basta abrir o `index.html` no navegador. Não roda `npm`/build.

## Estrutura de arquivos
- `index.html` — estrutura e conteúdo de todas as seções.
- `css/styles.css` — toda a identidade visual. Variáveis de cor e fonte no `:root` no topo.
- `js/main.js` — interações (slideshow com dots + setas do teclado, animações, menu mobile).
- `assets/img/` — fotos REAIS do grupo, otimizadas p/ web (~1920px, JPEG 82):
  `fazenda-aerea.jpg` (drone: sede, silos e lavouras), `algodoal.jpg` (algodoal ao pôr do sol),
  `pecuaria.jpg` (gado no pasto), `familia-orth.jpg` (festa dos 40 anos),
  `comeco-fazenda.jpg` (histórica: trator dos primeiros anos, usada em "Quem somos"),
  `silos-por-do-sol.jpg` (silos e barracão no pôr do sol — só na galeria).
  Originais em alta resolução ficam em `assets/img/originais/` (não referenciar no site — são pesados).
- `assets/logo/` — logotipo oficial:
  - `LOGOTIPO GRUPO ORTH_2025-1_00002.png` — arte original (as duas versões, azul e branca).
  - `logo-branca.png` / `logo-azul.png` — logotipo completo (símbolo folha+seta + "grupo ORTH")
    com fundo transparente, pré-colorido. Usados como `<img>` no header e no footer:
    a branca aparece sobre o hero e no rodapé; a azul entra quando o header ganha fundo claro
    ao rolar (troca via classes `.brand-logo--light/--dark` + `.scrolled` no CSS).
  - IMPORTANTE: NÃO usar CSS `mask-image` para a logo — o site é aberto via `file://` e o
    navegador bloqueia a máscara (CORS), deixando a logo invisível. Por isso são 2 PNGs.

## Seções da página (na ordem)
1. Header fixo com navegação (fica transparente sobre o hero e ganha fundo ao rolar).
2. Hero em tela cheia com slideshow de fotos que trocam sozinhas (efeito Ken Burns + crossfade), com "dots" e **setas ←/→ do teclado** para trocar manualmente. Os dots são gerados pelo `main.js` conforme a quantidade de `.hero-slide` no HTML (hoje 4: aérea, algodoal, pecuária e família). Eyebrow: "Agronegócio · Desde 1985".
3. Quem somos — história real (1985, irmãos Ireneu e Afonso Orth, Tapera/RS → Oeste Baiano; 40 anos, 3 gerações) ao lado da foto histórica `comeco-fazenda.jpg`.
4. Nossas frentes de produção — 4 cartões: Grãos (soja, milho, sorgo, milheto), Fibras e beneficiamento (algodão, algodoeira própria desde 2001), Pecuária e Logística (Transorth). Bloco único com cantos cortados, ícones SVG traço fino, número-fantasma, hover que inunda o card de azul de baixo pra cima.
5. Galeria — faixa de fotos em loop infinito (pausa no hover).
6. Missão, visão e valores — tríade aberta separada por filetes (M/, V/, V/). Visão: referência no agro brasileiro. Valores: "Trabalho, fé e perseverança".
7. Vídeo (id="video") — última seção antes do rodapé: "Conheça nossa história", com YouTube incorporado.
   PEGADINHA: aberto por `file://` o YouTube dá **erro 153** (exige cabeçalho Referer, que
   não existe em arquivo local). Para testar o vídeo localmente, usar o `testar-local.bat`
   (serve em http://localhost:8080). No site publicado (Vercel) funciona direto.
8. Rodapé (id="contato") — marca + tagline, contatos REAIS clicáveis (tel (62) 99875-4466, orth@orth.com.br, Rodovia BR-349 km 278 — Rosário · Correntina/BA) e redes: Instagram, LinkedIn e YouTube (SEM Facebook). NÃO há formulário de contato.

## Decisões de conteúdo (pedidos do cliente — não reverter)
- A seção "Em números" foi REMOVIDA a pedido (dados considerados sensíveis p/ ficar na internet). Não recriar contadores.
- A foto das sacolas (`originais/IMG_1365.jpg`) foi tirada do site a pedido.

## Paleta (marca oficial — definida no :root do styles.css)
Baseada no manual da marca: **Pantone 661 C (azul) + branco**. Nada de verde/dourado.
- Azuis: --brand #002F87 (Pantone 661 C, cor principal), --blue-900 #041A4D (fundos escuros),
  --blue-800 #062561, --blue-600 #14409B, --blue-500 #2B55C4 (destaque/interação),
  --blue-300 #9FB6EE (rótulos sobre fundo escuro)
- Neutros: --paper #F4F6FB (branco frio), --paper-2 #E7ECF7, --ink #0E1A3A, --ink-soft #4A5678
- Regra de contraste: sobre azul, os destaques ficam **brancos**; sobre claro, ficam **azuis**.

## Padrões e convenções
- Animações "aparecer ao rolar": qualquer elemento com a classe `reveal` (e `reveal-d1/d2/d3` para atraso). Controladas por IntersectionObserver no `main.js`.
- Respeitar `prefers-reduced-motion`: todas as animações já têm fallback. Manter isso ao adicionar novas.
- Ícones são SVG desenhados à mão (traço fino), NÃO usar emojis.
- Etiquetas amarelas tracejadas (`.placeholder-note`): a classe existe no CSS, mas o conteúdo
  do site já é todo real — hoje não há nenhuma em uso no HTML. Usar apenas se entrar
  conteúdo provisório novo.