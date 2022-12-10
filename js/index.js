const btnDado = document.getElementById('btn_dado');

const cards = document.querySelectorAll('.cartao');
let cardAtual = 0;

//funções
function esconderCardSelecionado(){
    const cardSelecionado = document.querySelector('.escolhido');
    cardSelecionado.classList.remove('escolhido');
}

function mostrarCard (indiceCartao){
    cards[indiceCartao].classList.add('escolhido');
}

//identifica o clique de um usuario na seta avançar
btnDado.addEventListener('click',function(){
    //não deixa o código avançar depois do fim da execução
    if(cardAtual === cards.length -1) return
    
    esconderCardSelecionado();
    
    //faz aparecer o próximo card da lista
    cardAtual++;
    mostrarCard(cardAtual);
    })