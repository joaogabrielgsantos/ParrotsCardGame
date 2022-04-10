let cards =
    [
        { nome: "explody-card1", imagem: "/Projeto_04_parrotsCardGame/Arquivos Úteis - Projeto 04 - Parrot Card Game/explodyparrot.gif", id: "explody" },
        { nome: "explody-card2", imagem: "/Projeto_04_parrotsCardGame/Arquivos Úteis - Projeto 04 - Parrot Card Game/explodyparrot.gif", id: "explody" },
        { nome: "bob-card1", imagem: "/Projeto_04_parrotsCardGame/Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif", id: "bob" },
        { nome: "bob-card2", imagem: "/Projeto_04_parrotsCardGame/Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif", id: "bob" },
        { nome: "fiesta-card1", imagem: "/Projeto_04_parrotsCardGame/Arquivos Úteis - Projeto 04 - Parrot Card Game/fiestaparrot.gif", id: "fiesta" },
        { nome: "fiesta-card2", imagem: "/Projeto_04_parrotsCardGame/Arquivos Úteis - Projeto 04 - Parrot Card Game/fiestaparrot.gif", id: "fiesta" },
        { nome: "metal-card1", imagem: "/Projeto_04_parrotsCardGame/Arquivos Úteis - Projeto 04 - Parrot Card Game/metalparrot.gif", id: "metal" },
        { nome: "metal-card2", imagem: "/Projeto_04_parrotsCardGame/Arquivos Úteis - Projeto 04 - Parrot Card Game/metalparrot.gif", id: "metal" },
    ];
let cartasEscolhidas = [];
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

}
function comparador() { 
	return Math.random() - 0.5; 
}
console.log(cartasEscolhidas)










/*
function rotacionar (elemento){
    
    let back = elemento.querySelector(".card-back")
    let front = elemento.querySelector(".card-front")
    front.classList.toggle("rotate")
    back.classList.toggle("rotate")
}
*/