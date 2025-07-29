const eH1 = document.querySelector("h1");
eH1.textContent = "Olá mundo!";

const eTabuleiro = criaTabuleiro();
document.body.appendChild(eTabuleiro);

const pecinha1 = criaPecinha("preto");
eTabuleiro.appendChild(pecinha1);

function criaTabuleiro() {
    const eTabuleiro = document.createElement("div");
    eTabuleiro.classList.add("tabuleiro");
    return eTabuleiro;
}

function criaPecinha(cor){
    const novaPecinha = document.createElement("div");
    novaPecinha.classList.add("pecinha");
    novaPecinha.dataset.cor = cor;
    return novaPecinha;
}