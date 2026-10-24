# Pegasus Website — Agent Context

Este arquivo é a memória operacional e de design do website público do Pegasus. Consulte-o antes de propor ou implementar mudanças. O ADR-001 continua sendo a autoridade de produto; este arquivo registra decisões posteriores e detalhes de execução.

## Processo obrigatório

Para toda tarefa, siga esta ordem:

1. `/init`: confirmar contexto, estado do repositório e instruções aplicáveis.
2. `explore`: inspecionar arquivos, conteúdo, dependências e restrições relevantes.
3. `plan`: registrar mudanças, riscos e validações antes de editar.
4. `code`: implementar mudanças incrementais e focadas.
5. `test`: executar build, checagens e validações proporcionais ao risco.

Use Conventional Commits quando commits forem solicitados: `tipo: descrição` ou `tipo(escopo): descrição`, sem ponto final.

## Objetivo do produto

Pegasus é um projeto open source de Developer Experience / Linux Customization que transforma uma instalação limpa do Fedora Workstation com GNOME em um ambiente de desenvolvimento moderno, personalizado, consistente e pronto para uso. O site deve explicar a proposta, orientar instalação, documentar configurações e apresentar temas verificáveis.

O produto oferece uma experiência de configuração opinativa, automatizando progressivamente a instalação de ferramentas, a configuração do sistema e a personalização do ambiente gráfico. Pegasus não é uma distribuição Linux independente e não substitui o ambiente gráfico original do Fedora.

Repositório oficial: https://github.com/MoisesHsilva1/pegasus

### Proposta de valor e princípios

- reduzir o trabalho repetitivo de configurar ferramentas, shell, desktop, atalhos e preferências;
- priorizar uma experiência developer-first, acessível também a usuários com conhecimentos básicos de Linux;
- oferecer defaults opinativos sem retirar do usuário o controle sobre o sistema;
- permitir personalização, especialmente de temas, aparência e preferências;
- produzir resultados consistentes em instalações compatíveis;
- manter o desenvolvimento, as configurações e as decisões abertos à inspeção e contribuição.

### Escopo funcional do produto

- CLI para preparar o sistema, instalar componentes selecionados, aplicar configurações, informar progresso e explicar falhas;
- base opinativa de ferramentas para terminal, shell, editores, controle de versão, utilitários e produtividade;
- personalização do GNOME por meio de temas, ícones, fontes, wallpapers, atalhos e preferências suportadas;
- capacidades progressivas de aplicar configurações, alterar temas, verificar dependências, diagnosticar problemas e atualizar componentes gerenciados.

Não inventar comandos específicos da CLI, lista de ferramentas, requisitos, compatibilidade ou comportamento de manutenção enquanto esses detalhes não estiverem confirmados no repositório oficial.

Não apresentar Pegasus como uma distribuição Linux independente. Não inventar recursos, requisitos, comandos, links de repositório, screenshots ou compatibilidade.

## Público e idioma

- Público principal: desenvolvedores e entusiastas de Linux.
- Idioma do MVP: inglês.
- Internacionalização: possível evolução futura, fora do MVP.

## Direção visual

O design combina retrofuturismo editorial com uma UI retrô discreta. A referência pode inspirar composição e linguagem, mas não deve ser copiada.

### Paleta obrigatória

```css
--color-ink: #0A100D;
--color-ash: #B9BAA3;
--color-bone: #D6D5C9;
--color-red: #A22C29;
--color-chestnut: #902923;
```

Não criar cores de marca arbitrárias. Ash Grey substitui o antigo verde/teal. Variações só podem ser calculadas por transparência, contraste ou estado de interação.

### Tipografia

- Títulos: sans-serif editorial forte.
- Interface, metadados e terminal: `IBM Plex Mono` ou equivalente.
- Texto corrido: `IBM Plex Sans` ou equivalente.
- Não usar fonte pixelada para leitura longa.

### UI retrô

- Usar molduras finas, contornos escuros, cantos levemente arredondados e barras de janela.
- Barras de janela têm apenas dois círculos decorativos e um título monoespaçado.
- Os círculos não são controles funcionais.
- Textura, halftone ou granulação só podem aparecer em fundos decorativos e previews, nunca sobre parágrafos, botões ou documentação.
- Não simular um desktop completo.
- Não criar sombras complexas, glassmorphism, gradientes chamativos ou animação ornamental.
- A interação de ponteiro usa pixels pequenos, somente em pointer fino, com pool limitado e sem bloquear conteúdo.
- O efeito de ponteiro é desligado em touch e `prefers-reduced-motion`.

### Direção editorial atualizada

- A referência mais recente adiciona uma linguagem de revista impressa: grid assimétrico, coluna lateral, cards editoriais, blocos de destaque e ritmo vertical mais denso.
- Aplicar essa composição principalmente na Home e em Themes.
- Home deve funcionar como uma capa editorial mais espaçada.
- Themes deve funcionar como um catálogo visual mais denso, com grid principal e sidebar.
- Usar molduras, etiquetas, títulos de seção e metadados para criar hierarquia editorial.
- Manter a paleta Pegasus; não adicionar amarelo, oliva ou marrom como cores de marca.
- Superfícies claras usam Bone e Ash Grey; não usar branco puro.
- A referência serve para composição e ritmo, não para copiar identidade, textos ou imagens.

### Marca

- Header minimalista, mas com navegação visível para `Docs`, `Themes` e `Install`.
- GitHub deve aparecer no header e no footer usando a URL oficial confirmada: `https://github.com/MoisesHsilva1/pegasus`.
- O ícone é um cavalo original em linguagem pixel/line-art compatível com a UI, não um brasão complexo.
- O ícone deve ser legível em tamanhos pequenos e possuir texto alternativo acessível quando usado como conteúdo.

## Home

- Home predominantemente escura, com `--color-ink` como fundo principal.
- Não usar a ilustração CRT anterior no hero; ela foi removida por decisão de design.
- Hero deve privilegiar texto, CTA e um painel textual/terminal com aparência de janela retrô.
- A primeira dobra deve ser centralizada, escura e minimalista, sem etiqueta ou anúncio acima do título.
- O hero usa pixels decorativos nas bordas e dois CTAs; interações ficam restritas a hover/foco sem animação contínua.
- O título da primeira dobra usa `Press Start 2P` apenas como tratamento pixel curto, com animação em `steps()` e fallback para `prefers-reduced-motion`.
- O hero deve explicar em poucos segundos que Pegasus configura o Fedora Workstation com GNOME para um fluxo de desenvolvimento e deixar claro que ele não é uma distribuição Linux.
- A linha divisória abaixo do header foi removida.
- Docs e Install continuam claras, usando Bone e Ash Grey, para leitura prolongada.

## Conteúdo e páginas

O site é estático e possui páginas separadas:

- Home: proposta, contexto, capacidades reais e CTA.
- Install: requisitos e instruções somente quando verificadas.
- Docs: documentação em Markdown.
- Themes: catálogo visual e páginas individuais em Markdown.

Cada tema deve ter, quando estiver disponível:

- nome;
- resumo curto;
- screenshot real;
- compatibilidade;
- status de manutenção;
- fonte oficial;
- instruções de instalação verificadas.

Enquanto screenshots ou comandos não existirem, usar `Draft` e `Preview coming soon`. Não apresentar placeholders como capturas reais.

## Personagens pixel art

Decisão aprovada para a próxima implementação:

- Criar quatro personagens pixel art originais para o MVP.
- Associar personagens aos cards de temas.
- Usar personagens como camada de interatividade retro, não como decoração espalhada por toda a página.
- Cada personagem pode ter um frame idle e um frame alternativo para hover/foco.
- Troca de frame em `:hover` e `:focus-visible`, sem JavaScript.
- Respeitar `prefers-reduced-motion`; não usar animação contínua obrigatória.
- Preferir SVG code-native com `shape-rendering: crispEdges` ou sprites próprios do projeto, sem copiar personagens da referência.
- O front matter de cada tema pode usar `character: scout` ou identificador equivalente.

Estrutura recomendada:

```text
src/assets/sprites/characters.svg
src/_includes/components/theme-character.njk
src/assets/styles/components/pixel-characters.css
```

## Arquitetura técnica

- Eleventy 3 como gerador estático.
- Nunjucks para layouts e componentes reutilizáveis.
- Markdown para documentação e temas.
- HTML semântico.
- CSS vanilla organizado em `base`, `layout`, `components` e `pages`.
- BEM para nomes de componentes.
- JavaScript mínimo; não adicionar framework de UI, gerenciamento de estado, Tailwind ou biblioteca de animação sem decisão explícita.
- GitHub Pages via `.github/workflows/deploy.yml`.

Estrutura atual relevante:

```text
src/
  _data/
  _includes/
    components/
    layouts/
  content/
    docs/
    themes/
  pages/
  assets/
    styles/
scripts/check-links.mjs
eleventy.config.js
```

## Plano de implementação dos personagens e refinamento retro

1. Criar quatro personagens pixel art originais em um sprite SVG com frames idle/hover.
2. Criar componente Nunjucks para renderizar o personagem de cada tema.
3. Adicionar `character` ao front matter dos temas.
4. Refazer os cards de temas com barra de janela, dois círculos decorativos, personagem e metadados.
5. Adicionar estado `hover`/`focus-visible` sem JavaScript.
6. Adicionar halftone discreto somente nos previews e fundos decorativos.
7. Confirmar contraste e legibilidade em desktop e mobile.
8. Rodar `npm run check`, checagem de sintaxe, rotas e revisão dos artefatos gerados.

## Estado da implementação retro

- O sprite SVG com quatro personagens e frames idle/hover já existe em `src/assets/sprites/characters.svg`.
- O componente `theme-character.njk` já renderiza os frames com `use` externo e `aria-hidden`.
- O tema `First Light` já usa `character: scout`.
- Os cards de temas já têm barra de janela, dois círculos decorativos, halftone de fundo e troca de frame em hover/foco.
- Não há JavaScript ou animação contínua para os personagens; o único JavaScript visual é o cursor pixelado progressivo.
- A paleta atual usa Onyx, Ash Grey, Bone, Brown Red e Chestnut.
- A primeira dobra da Home usa hero centralizado, sem anúncio acima do título.
- O efeito de cursor pixelado está em `src/assets/scripts/pixel-cursor.js`, limitado a pointer fino e reduzido quando necessário.

## Validação obrigatória

Antes de declarar uma mudança concluída:

- executar `npm run check`;
- verificar build das seis rotas atuais;
- verificar `lang="en"`, `<main>`, `<title>`, skip link e alt text quando aplicável;
- testar navegação por teclado e estados `:focus-visible` quando houver interação;
- validar que nenhum comando, link ou recurso foi inventado;
- revisar responsividade em pelo menos mobile e desktop;
- revisar que `prefers-reduced-motion` continua respeitado;
- reportar limitações de preview visual quando o ambiente não permitir abrir servidor.

## Pendências conhecidas

- Screenshots reais dos temas ainda não estão disponíveis.
- O repositório Git local está incompleto; não presumir histórico ou base para diff.
