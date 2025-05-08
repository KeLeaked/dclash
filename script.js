// Função para abrir o modal com a imagem e informações do cílio
function openModal(imgSrc, text, nomeCilio) {
  var modal = document.getElementById("modal-catalogo");
  var modalImg = document.getElementById("modalImg");
  var modalInfo = document.getElementById("modalInfo");
  var whatsappLink = document.getElementById("whatsapp-link");

  // Atualizar a imagem e o texto do modal
  modalImg.src = imgSrc;
  modalInfo.textContent = text;

// Atualizar o link do WhatsApp com a mensagem de agendamento
var mensagem = `Quero agendar um designer de cílios: ${nomeCilio}`;
whatsappLink.href = `https://wa.me/5511932006989?text=${encodeURIComponent(mensagem)}`; // Número de telefone corrigido

modal.style.display = "flex"; // Exibe o modal
}

// Fechar o modal quando o usuário clicar no 'X'
var fecharBtn = document.getElementsByClassName("fechar")[0];
fecharBtn.onclick = function() {
  document.getElementById("modal-catalogo").style.display = "none";
}

// Fechar o modal quando o usuário clicar fora da área do modal
window.onclick = function(event) {
  if (event.target === document.getElementById("modal-catalogo")) {
    document.getElementById("modal-catalogo").style.display = "none";
  }
}
// JavaScript para alternar o menu hamburguer
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('open');
  this.classList.toggle('open');
});