// Captura o formulário
const form = document.getElementById('contatoForm');

// Adiciona evento de envio
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que a página recarregue
    alert('Mensagem enviada com sucesso!'); // Feedback para usuário
    form.reset(); // Limpa o formulário
});
