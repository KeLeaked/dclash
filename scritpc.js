document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('modal');
    const modalImagem = document.getElementById('modal-imagem');

    window.abrirModal = function(elemento) {
        modalImagem.src = elemento.src;
        modal.style.display = 'flex';
    };

    window.fecharModal = function() {
        modal.style.display = 'none';
        modalImagem.src = ""; // Limpa a imagem ao fechar o modal
    };

    // Fechar o modal ao clicar fora da imagem
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            fecharModal();
        }
    });
});
function changeImage(src) {
    document.getElementById("main-img").src = src;
}
