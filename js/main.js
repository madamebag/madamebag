document.addEventListener('DOMContentLoaded', () => {
  // MENU HAMBURGER
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
  });

  // WHATSAPP POPUP
  const popup = document.getElementById('whatsappPopup');
  const btn = document.getElementById('whatsappButton');
  const close = document.getElementById('closePopup');

  setTimeout(() => popup?.classList.add('active'), 1200);
  btn?.addEventListener('click', () => popup?.classList.toggle('active'));
  close?.addEventListener('click', () => popup?.classList.remove('active'));
});

// FUNÇÃO COMPRAR
function comprar(produto, preco) {
  const telefone = "5599999999999"; // TROCAR
  const mensagem = `Olá! Gostaria de comprar:\n\nProduto: ${produto}\nPreço: R$ ${preco.toFixed(2)}\n\nPode me passar as formas de pagamento?`;
  window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`, "_blank");
}
