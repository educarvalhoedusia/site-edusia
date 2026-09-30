// Menu mobile
const menuToggle = document.getElementById("menu-toggle");
const menuPrincipal = document.getElementById("menu-principal");

if (menuToggle && menuPrincipal) {
  menuToggle.addEventListener("click", () => {
    const aberto = menuPrincipal.classList.toggle("aberto");
    menuToggle.setAttribute("aria-expanded", String(aberto));
  });

  menuPrincipal.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuPrincipal.classList.remove("aberto");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Acordeão do FAQ
document.querySelectorAll(".acordeao__pergunta").forEach((botao) => {
  botao.addEventListener("click", () => {
    const resposta = document.getElementById(botao.getAttribute("aria-controls"));
    const aberto = botao.getAttribute("aria-expanded") === "true";

    botao.setAttribute("aria-expanded", String(!aberto));
    if (resposta) {
      resposta.hidden = aberto;
    }
  });
});

// Botão "Fale com nosso assistente"
// O chat.js do assistente de vendas será adicionado depois, antes de </body>.
// Enquanto ele não existir, o botão abre o WhatsApp como alternativa.
function acionarAssistente() {
  if (typeof window.abrirAssistenteEdusia === "function") {
    window.abrirAssistenteEdusia();
  } else {
    window.open("https://wa.me/5519991808312", "_blank", "noopener");
  }
}

document.querySelectorAll("#abrir-assistente, .js-abrir-assistente").forEach((botao) => {
  botao.addEventListener("click", acionarAssistente);
});

// Ano atual no rodapé
const anoAtual = document.getElementById("ano-atual");
if (anoAtual) {
  anoAtual.textContent = String(new Date().getFullYear());
}
