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
- `js/main.js` — interações (slideshow, animações, contadores, menu mobile).
- `assets/img/` — fotos REAIS do grupo, otimizadas p/ web (~1920px, JPEG 82):
  `fazenda-aerea.jpg` (drone: sede, silos e lavouras), `algodoal.jpg` (algodoal ao pôr do sol),
  `pecuaria.jpg` (gado no pasto), `familia-orth.jpg` (festa dos 40 anos),
  `sacolas-40anos.jpg` (retrato: lembranças da festa com algodão). Originais em alta
  resolução ficam em `assets/img/originais/` (não referenciar no site — são pesados).
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
2. Hero em tela cheia com slideshow de fotos que trocam sozinhas (efeito Ken Burns + crossfade), com "dots" para trocar manualmente. Os dots são gerados pelo `main.js` conforme a quantidade de `.hero-slide` no HTML (hoje 4: aérea, algodoal, pecuária e família).
3. Quem somos — história, texto ao lado de uma foto.
4. Nossas frentes de produção — 4 cartões em bloco único com cantos cortados (referência a talhões), ícones em SVG traço fino, número-fantasma no canto, e hover que inunda o card de verde de baixo pra cima.
5. Em números — contadores que animam de 0 até o valor quando entram na tela.
6. Galeria — faixa de fotos em loop infinito (pausa no hover).
7. Missão, visão e valores — tríade aberta separada por filetes, com traço dourado no topo e rótulo em mono (M/, V/, V/). Sem cards bege.
8. Rodapé (id="contato") — marca + tagline, contatos (telefone, e-mail, localização com ícones), e botões quadrados de redes sociais (Instagram, Facebook, LinkedIn, YouTube). NÃO há formulário de contato.

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
- Etiquetas amarelas tracejadas (`.placeholder-note`) marcam conteúdo