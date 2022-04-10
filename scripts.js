let cards =
    [
        { nome: "explody-card1", imagem: "/Projeto_04_parrotsCardGame/arquivos-projeto04-parrotcardgame/explodyparrot.gif", id: "explody" },
        { nome: "explody-card2" , imagem: "/Projeto_04_parrotsCardGame/arquivos-projeto04-parrotcardgame/explodyparrot.gif" , id: "explody" },
        { nome: "bob-card1" , imagem: "/Projeto_04_parrotsCardGame/arquivos-projeto04-parrotcardgame/bobrossparrot.gif" , id: "bob" },
        { nome: "bob-card2" , imagem: "/Projeto_04_parrotsCardGame/arquivos-projeto04-parrotcardgame/bobrossparrot.gif" , id: "bob" },
        { nome: "fiesta-card1" , imagem: "/Projeto_04_parrotsCardGame/arquivos-projeto04-parrotcardgame/fiestaparrot.gif" , id: "fiesta" },
        { nome: "fiesta-card2", imagem: "/Projeto_04_parrotsCardGame/arquivos-projeto04-parrotcardgame/fiestaparrot.gif" , id: "fiesta" },
        { nome: "metal-card1", imagem: "/Projeto_04_parrotsCardGame/arquivos-projeto04-parrotcardgame/metalparrot.gif" , id: "metal" },
        { nome: "metal-card2", imagem: "/Projeto_04_parrotsCardGame/arquivos-projeto04-parrotcardgame/metalparrot.gif" , id: "metal" },
    ];
let cartasEscolhidas = [];
let elementoCard1 = null;
let elementoCard2 = null;
let card1 = null;
let card2 = null;
let pontos = 0;
let quantidadeCartas = prompt("Com quantas cartas você quer jogar? (4~8)");

validarCartas()

function validarCartas() {
    while (!(quantidadeCartas >= 4 && quantidadeCartas <= 8 && quantidadeCartas % 2 === 0)) {
        console.log("deu errado");
        quantidadeCartas = prompt("Escolha o número de cartas novamente (4~14)");
    }
    console.log("Deu certo");
    listaCartasEscolhidas();
}

function listaCartasEscolhidas() {
    for (let index = 0; index < quantidadeCartas; index++) {
        cartasEscolhidas.push((cards[index]));
    }
    cartasEscolhidas.sort(comparador);
    distribuicaoCartas();

}
function comparador() { 
	return Math.random() - 0.5; 
}
console.log(cartasEscolhidas)

function distribuicaoCartas(){
    let cardsWrapper = document.querySelector(".cards-wrapper");
    console.log(cartasEscolhidas[0].imagem)
    let index = 0
    while (index < cartasEscolhidas.length){
        cardsWrapper.innerHTML += 
    `<div class="card" onclick="analisarCards(this)">
        <div class="face card-front">
        <img src="/Projeto_04_parrotsCardGame/arquivos-projeto04-parrotcardgame/front.png">
        </div> 
        <div class="face card-back" data-valor="${cartasEscolhidas[index].id}">
        <img class="${cartasEscolhidas[index].id}" src= ${cartasEscolhidas[index].imagem}>
        </div>      
    </div>`;
    index ++;
    }
}


function rotacionar (elemento){
    let back = elemento.querySelector(".card-back")
    let front = elemento.querySelector(".card-front")
    let estaVirada = back.classList.contains("rotate")
    if (! estaVirada){
        front.classList.add("rotate")
        back.classList.add("rotate")
    }   
    
        
    if (card1 === null){        
        card1 = back.getAttribute("data-valor");
        elementoCard1 = elemento;
    } else {
        card2 = back.getAttribute("data-valor");
        elementoCard2 = elemento;
    }
   
}

function analisarCards (elemento){
    rotacionar(elemento)
    if (card1 === card2 && card2 !== null){
        pontos++
        card1 = null;
        card2 = null;
    } if (card1 !== card2 && card2 !== null) {
        console.log("tá funcionando até aqui")  
        const e = elementoCard1.querySelectorAll(".rotate")
        const a = elementoCard2.querySelectorAll(".rotate")
        
        setTimeout(revertRotate, 1000);

        function revertRotate (){
            e.forEach(rotate => {
                rotate.classList.remove("rotate");            
            });
            a.forEach(rotate => {
                rotate.classList.remove("rotate");            
            });            
            elementoCard1 = null;
            elementoCard2 = null;
            card1 = null;
            card2 = null;
            console.log(elementoCard1)
            
        }        
        

    }
}

