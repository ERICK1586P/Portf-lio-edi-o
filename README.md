# Portfólio de Editor de Vídeos DR

Primeira versão local do portfólio, focada somente em ADS para Direct Response.

## Como abrir

Abra o arquivo `index.html` no navegador.

## O que já foi ajustado

- Site em página única.
- Tema preto com azul-claro.
- Área de foto com brilho dourado.
- Portfólio focado somente em ADS.
- Sem categorias de VSL e Leads.
- Sem botões de palavras-chave/filtros na área de trabalhos.
- Cards de vídeo com player carregado somente depois do clique.
- Seção de serviços ajustada para ADS.
- Botão final de contato removido.
- Apenas o ícone flutuante verde do WhatsApp fica visível.
- Área Sobre preenchida com texto resumido, citando Formação Editor DR, experiência em nutra, ADS/leads, CapCut, Google Flow, Veo 3.1, áudio/lipsync e automações.

## Trocar seu nome

Procure por:

```html
Seu nome aqui
```

E troque pelo seu nome.

No rodapé, procure por:

```html
Seu Nome
```

E troque também.

## Trocar WhatsApp

Procure por:

```html
https://wa.me/5553999508791
```

Troque pelo seu número com DDI e DDD, sem espaços. Exemplo:

```html
https://wa.me/5553999999999
```

## Colocar sua foto

Quando tiver sua foto, coloque o arquivo dentro da pasta `assets/`, por exemplo:

```text
assets/foto-erick.png
```

Depois, no `index.html`, substitua:

```html
<span>Foto</span>
```

por:

```html
<img src="assets/foto-erick.png" alt="Foto do editor" />
```

A borda dourada já está configurada no CSS.

## Colocar vídeos reais

Edite o arquivo:

```text
js/videos.js
```

Em cada card, troque:

```js
videoUrl: ""
```

por um link do YouTube, Vimeo ou MP4 hospedado.

Exemplo YouTube:

```js
videoUrl: "https://www.youtube.com/watch?v=SEU_ID"
```

O site transforma automaticamente esse link em player embed.

## Subir no Cloudflare Pages

Você pode subir esta pasta como site estático no Cloudflare Pages. O projeto não precisa de servidor, banco de dados ou build.

## Sobre mim

O texto da seção Sobre já foi atualizado. Para editar, procure por:

```html
Fiz a Formação Editor DR do Gabriel Figueiredo
```

e altere os parágrafos dentro da seção `<section class="section-pad about" id="sobre">`.


## Ajustes desta versão

- Topo alterado para “Portifólio de criativos”, sem ícone DR e sem “EditorPortfolio”.
- Nome do perfil alterado para Érick Oliveira Buchweitz.
- Legenda abaixo do nome removida.
- Mantido apenas um card de categoria: ADS.
- Rodapé atualizado com Érick Oliveira Buchweitz.
- Ícone flutuante do Instagram adicionado acima do WhatsApp.

## Trocar o Instagram

No `index.html`, procure por:

```html
https://www.instagram.com/erickoliveira.__
```

E troque pelo seu perfil real.


## Tradutor da página

O site usa o widget do Google Translate no menu superior para permitir tradução automática da página.

Observações:
- O tradutor depende de internet para carregar.
- Em arquivo local (`index.html` aberto direto no computador), o seletor pode aparecer, mas a tradução pode funcionar melhor depois que o site estiver publicado em um domínio, como no Cloudflare Pages.
- O nome do editor está marcado para não ser traduzido.


## Tradução automática do navegador

O site está configurado com `lang="pt-BR"` e `Content-Language: pt-BR` para ajudar navegadores como Chrome, Edge e Safari a reconhecerem que a página está em português.

A barra nativa de tradução do navegador não pode ser forçada pelo código do site. Ela aparece automaticamente quando o navegador do visitante está em outro idioma e reconhece a página como português.

Para testar, publique o site ou abra no navegador com o idioma principal configurado como inglês/espanhol. Em arquivo local, o comportamento pode variar.


## Categorias de ADS

- High Ticket
- Low Ticket

Os vídeos demonstrativos são filtrados por essas duas categorias ao clicar nos cards.
