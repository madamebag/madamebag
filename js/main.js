function comprar(produto, preco) {
  const telefone = "5599999999999"; // TROCAR
  const mensagem = `
Olá! Gostaria de comprar:

👜 Produto: ${produto}
💰 Preço: R$ ${preco.toFixed(2)}

Pode me passar as formas de pagamento?
  `;
  window.open(
    `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
}
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("whatsappPopup");
  const btn = document.getElementById("whatsappButton");
  const close = document.getElementById("closePopup");

  // Abre automaticamente depois de 1.2s
  setTimeout(() => popup.classList.add("active"), 1200);

  // Alternar popup ao clicar no bot�o
  btn.onclick = () => popup.classList.toggle("active");

  // Fechar popup
  close.onclick = () => popup.classList.remove("active");
});

