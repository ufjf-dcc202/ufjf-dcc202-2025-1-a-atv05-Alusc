import { getTabuleiro, seleciona } from "./pecinhas.js";

const eH1 = document.querySelector("h1");
eH1.textContent = "Olá mundo!";

const eTabuleiro = criaTabuleiro();
document.body.appendChild(eTabuleiro);

const tabuleiro = getTabuleiro();

for (let i = 0; i < 7; i++) {
    const pecinha = criaPecinha(tabuleiro[i], i);
    eTabuleiro.appendChild(pecinha);
    pecinha.addEventListener("click", cliquePecinha);
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
    const posicao1 = Number(pecinha1.target.dataset.posicao);
    const posicao2 = Number(pecinha2.target.dataset.posicao);
    seleciona(posicao1);
    seleciona(posicao2);
    pecinha1.dataset.posicao = pecinha2.dataset.posicao;
    pecinha1 = null;
    pecinha2 = null; 

}


function cliquePecinha(evento){
    if (!pecinha1)
        pecinha1 = evento.target;
    else if (!pecinha2)
        pecinha2 = evento.target;
    tentarMover();
}