import {embaralharCartas, tirarCartaAleatoria} from "./baralho.js"

document.getElementById('bnt-carta').addEventListener('click', ()=>{
    tirarUmaCartaDoBaralho();
})

const valorInnerHTML = document.getElementById('valor-carta')
const naipeInnerHTML = document.getElementById('naipe-carta')

async function tirarUmaCartaDoBaralho(){
    const baralho = await embaralharCartas()
    const carta = await tirarCartaAleatoria(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    const valorDaCarta = carta.cards[0].value
    valorInnerHTML.innerHTML = valorDaCarta
    const naipeDaCarta = carta.cards[0].suit
    naipeInnerHTML.innerHTML = naipeDaCarta
    document.getElementById('carta').src = imagemCarta
}

tirarUmaCartaDoBaralho()