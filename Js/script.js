document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões "Saiba mais"
    const buttons = document.querySelectorAll('.toggle-content');
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Seleciona o conteúdo irmão direto do botão clicado
            const moreContent = button.previousElementSibling;
            
            // Alterna a visibilidade do conteúdo adicional
            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                moreContent.style.display = 'block';
                button.textContent = 'Mostrar menos';
            } else {
                moreContent.style.display = 'none';
                button.textContent = 'Saiba mais';
            }
        });
    });
});
