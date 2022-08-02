/*
    OBJETIVO 1 - Quando clicarmos na seta de avançar temos que motrar o próximo cartão da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar

        - passo 2 - dar um jeito de identificar o clique do usuario da seta avançar

        - passo 3 - fazer aparecer o proxima  cartão da lista

        - passo 4 - buscar o cartão que está selecionado e esconder

    OBJETIVO 2 - Quando clicarmos na seta de voltar temos que motrar o cartão anterior da lista

        - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar

        - passo 2 - dar um jeito de identificar o clique do usuario da seta voltar

        - passo 3 - fazer aparecer o cartão anterior da lista

        - passo 4 - buscar o cartão que está selecionado e esconder
*/

const btnAvancar = document.getElementById('btn-avancar');
let cartaoAtual = 0;

btnAvancar.addEventListener('click', function(){
    const cartoes = document.querySelectorAll('.cartao');

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');

    
});
