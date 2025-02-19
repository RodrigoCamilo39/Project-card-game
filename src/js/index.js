const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach((cartao) => {
    cartao.addEventListener("click", function(){
        const cartaVirada = cartao.querySelector(".carta-virada");

        cartao.classList.toggle("virar");
        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");
    });
});

function avancarCartao() {
    if (cartaoAtual === cartoes.length - 1) {
        return;
    }

    const cartaoSelecionado = document.querySelector(".selecionado");

    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function voltarCartao() {
    if (cartaoAtual === 0) {
        return;
    }

    const cartaoSelecionado = document.querySelector(".selecionado");

    cartaoSelecionado.classList.remove("selecionado");
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
}

btnAvancar.addEventListener("click", avancarCartao);
btnVoltar.addEventListener("click", voltarCartao);