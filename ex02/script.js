const imagem = document.getElementById('img');
const Mensagem = document.getElementById('Mensagem');

imagem.addEventListener('mouseover', function() {
    Mensagem.textContent = 'Tira a mao ze!';
    Mensagem.addEventListener('mouseout', function() {
        Mensagem.textContent = ''
    });
});
