const eH1 = document.querySelector("h1");
eH1.textContent = "Olá mundo!";

const eTabuleiro = criaTabuleiro();
document.body.appendChild(eTabuleiro);


for (let i = 0; i < 7; i++) {
    if (i === 3) continue;
    const pecinha = criaPecinha(i < 3 ? "branco": "preto", i);
    eTabuleiro.appendChild(pecinha);
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