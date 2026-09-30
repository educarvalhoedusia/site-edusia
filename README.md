# Site Edusia Instituto

Site institucional estático (HTML, CSS e JavaScript puros, sem framework e sem etapa de build), pronto para publicação no GitHub Pages.

## Estrutura

```
index.html
css/style.css
js/main.js
img/
```

## Como visualizar localmente

Basta abrir `index.html` no navegador, ou servir a pasta com qualquer servidor estático (ex.: extensão "Live Server" do VS Code).

## Pendências de conteúdo

Os seguintes pontos estão marcados como `[PREENCHER]` no HTML e precisam ser confirmados:

- Datas e horários da próxima turma (outubro).
- Local dos encontros presenciais.
- Condições de desconto para grupos.
- Tipo de reconhecimento do certificado.
- Canal e horários do suporte on-line.
- Valores e forma de pagamento do investimento.

## Assistente de vendas

O botão "Fale com nosso assistente" já está preparado no HTML e no `js/main.js` (via `id="abrir-assistente"` e classe `js-abrir-assistente`). Quando o `chat.js` do assistente de vendas for adicionado antes do `</body>`, ele deve expor uma função global `abrirAssistenteEdusia()` — o `main.js` passa a chamá-la automaticamente. Até lá, o botão abre o WhatsApp como alternativa.
