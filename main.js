import { getTabuleiro, tentarMoverPecinha } from "./pecinhas.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Olá mundo!";

const eTabuleiro = criaTabuleiro();
document.body.appendChild(eTabuleiro);

atualizarTabuleiro();

function atualizarTabuleiro() {
    const tabuleiro = getTabuleiro();
    eTabuleiro.innerHTML = '';
    for (let i = 0; i < 7; i++) {
        const pecinha = criaPecinha(tabuleiro[i], i);
        eTabuleiro.appendChild(pecinha);
        pecinha.addEventListener("click", cliquePecinha);
    }
}

function criaTabuleiro() {
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}

function criaPecinha(cor, posicao){
    const novaPecinha = document.createElement("div");
    novaPecinha.classList.add("pecinha");
    novaPecinha.dataset.cor = cor;
    novaPecinha.dataset.posicao = posicao;
    return novaPecinha;
}

let pecinha1 = null;
let pecinha2 = null;

function tentarMover(){
    if (!pecinha1 || !pecinha2)
        return;
    tentarMoverPecinha(
        parseInt(pecinha1.dataset.posicao),
        parseInt(pecinha2.dataset.posicao)
    );
    atualizarTabuleiro();
    pecinha1 = null;
    pecinha2 = null;
}

function cliquePecinha(){
    if (!pecinha1 && this.dataset.cor){ 
        pecinha1 = this;
        pecinha2 = null;
        return;
    }

    if (!pecinha2 && !this.dataset.cor){
        pecinha2 = this;
        tentarMover();
    }
}