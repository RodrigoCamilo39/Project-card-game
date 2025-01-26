const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function avancarCartao() {
    if (cartaoAtual === cartoes.length - 1) {
        return;
    }

    const cartaoSelecionado = document.querySelector(".selecionado")

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