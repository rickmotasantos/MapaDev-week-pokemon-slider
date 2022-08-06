/*
    OBJETIVO 1 - Quando clicarmos na seta de avançar temos que motrar o próximo cartão da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar

        - passo 2 - dar um jeito de identificar o clique do usuario da seta avançar

        - passo 3 - fazer aparecer o proxima  cartão da lista

        - passo 4 - buscar o cartão que está selecionado e esconder

    
*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(){
    cartoes[cartaoAtual].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();
    
    
});
    
// OBJETIVO 2 - Quando clicarmos na seta de voltar temos que motrar o cartão anterior da lista

//         - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar

//         - passo 2 - dar um jeito de identificar o clique do usuario da seta voltar

//         - passo 3 - fazer aparecer o cartão anterior da lista

//         - passo 4 - buscar o cartão que está selecionado e esconder

btnVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();

    //esconder o cartão selecionado
    
    
});

