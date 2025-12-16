// WhatsApp
function comprar(produto, preco) {
  const telefone = "5599999999999";
  const mensagem = `Olá! Gostaria de comprar:\nProduto: ${produto}\nPreço: R$ ${preco.toFixed(2)}`;
  window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`, "_blank");
}

// Popup WhatsApp
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("whatsappPopup");
  const btn = document.getElementById("whatsappButton");
  const close = document.getElementById("closePopup");

  setTimeout(() => popup.classList.add("active"), 1200);
  btn.onclick = () => popup.classList.toggle("active");
  close.onclick = () => popup.classList.remove("active");

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});
