const tabuleiro = ['b', 'b', 'b', '', 'p', 'p', 'p'];

export function getTabuleiro(){
    return [...tabuleiro];
}

function mover(origem, destino){
    if (tabuleiro[origem] === '' || tabuleiro[destino] !== '' || destino < 0 || destino > 6 || origem < 0 || origem > 6) 
        return;
    let delta = origem - destino;
    let absDelta = Math.abs(delta);
    let dir = Math.sign(delta);
    if (absDelta === 1){
        andar(origem, destino);
        return;
    }
    if (absDelta === 2 && tabuleiro[origem - dir] !== ''){
        andar(origem, destino);
        return;
    }
}

function andar(origem, destino){
    tabuleiro[destino] = tabuleiro[origem];
    tabuleiro[origem] = '';
}

export function tentarMoverPecinha(posicao1, posicao2){
    mover(posicao1, posicao2);
}