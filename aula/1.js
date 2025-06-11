const frutas =["melancia", "uva", "morango", "banana", "maçã", "abacaxi", "pera", "manga", "melão", "laranja"];
let novaFrutas;

console.log(frutas);

function buscarPorPosicao() {
    let posicao = prompt("Escolha o índice do array (0 a " + (frutas.length - 1) + "):");
    alert(frutas[posicao]);
}

function tamanhoArray() {
    alert(frutas.length);
}

function adicionarFinal() {
    novaFrutas = prompt("Digite uma fruta:");
    frutas.push(novaFrutas);
    console.log(frutas);
}

function adicionarComeco() {
    novaFrutas = prompt("Digite uma fruta:");
    frutas.unshift(novaFrutas);
    console.log(frutas);
}

function adicionarFinalSemPush() {
    novaFrutas = prompt("Digite uma fruta:");
    frutas[frutas.length] = novaFrutas;
    console.log(frutas);
}

function listarArray() {
    let elementohtml = document.getElementById("listarFrutas");
    let estruturaHTML = "";
    for (novaFrutas of frutas) {
        estruturaHTML += '<p>' + novaFrutas + '</p><br>';
    }
    elementohtml.innerHTML = estruturaHTML;
}
function remover(){
frutas.pop()
listarArray()
if (frutas.length==0){
alert("Nao a como remover mais!")
}

}
function fatiar(){

    
    const fruta = frutas.slice(prompt("digite uma posiçao"))

}
