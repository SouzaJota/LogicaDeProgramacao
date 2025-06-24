
const botaoiniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const titulopergunta = document.getElementById("titulopergunta")
const proximaper = document.getElementById("proximapergunta")
const pontuacao = document.getElementById("pontuacao")

let contadorRespostaCorreta = 0

botaoiniciar.addEventListener("click", iniciarjogo)
proximaper.addEventListener("click", proximapergunta)
proximaper.disabled = true

const perguntas = [
    {pergunta:"Qual é o maior deserto do mundo?", opcoes:["Saara","Antartida","Amazonia","Atlantico"], correta:["Antartida"]},
    {pergunta: "Qual é a capital do Brasil?", opcoes:["São Paulo","Rio de Janeiro","Brasília","Bahia"], correta:["Brasília"]},
    {pergunta:"Qual é a capital da Austrália?", opcoes:["Melbourne","Camberra","Texas","Paris"], correta:["Camberra"]},
    {pergunta: "Qual é o país com maior população no mundo?", opcoes:["India","China","Brasil","EUA"], correta:["India"]},
    {pergunta:" Qual a linha imaginária que atravessa o Brasil?", opcoes:["Equador","Capricornio","Cancer","Gemeos"], correta:["Equador"]},
    {pergunta: "Qual o oceano que banha o Brasil?", opcoes:["Atlantico","Indico","Pacifico","Nilo"], correta:["Atlantico"]},
]

let botaodepergunta = document.createElement("button")

let indiceperguntas = 0

function iniciarjogo() {  
    fecharbotaoinicio()
    abrirareajogo()
}

function fecharbotaoinicio() {
    botaoiniciar.innerHTML = ""
}

function abrirareajogo() {
    divareajogo.classList.add("active")

    titulopergunta.textContent = perguntas[indiceperguntas].pergunta
    areaperguntas.innerHTML = ""

    perguntas[indiceperguntas].opcoes.forEach(opcao => {
    let botaodepergunta = document.createElement("button")
    botaodepergunta.textContent = opcao
    botaodepergunta.classList.add("answer-btn")
    botaodepergunta.addEventListener("click", () => validarrespostacorreta(opcao))
    areaperguntas.appendChild(botaodepergunta)
    
    })
}

function validarrespostacorreta(btnSelecionado){
    const botoesdaTela = document.querySelectorAll(".answer-btn")
    const respostacorreta = perguntas[indiceperguntas].correta[0]
    botoesdaTela.forEach(botao => {
        if(botao.textContent === respostacorreta){
            botao.classList.add("correct")
            botao.classList.add("disabled")
        }
        if(botao.textContent === btnSelecionado && botao.textContent != respostacorreta){
            botao.classList.add("incorrect")
        }
        if(btnSelecionado == respostacorreta){
            contadorRespostaCorreta++
        }
        botao.classList.add("disabled")
        botao.disabled = true
        proximaper.disabled = false
    })
}

function proximapergunta(){
    indiceperguntas++
    if(indiceperguntas < perguntas.length)
        abrirareajogo()
    else{
        encerrarJogo()
    }
    

proximaper.disabled = true
}

function encerrarJogo(){
    divareajogo.classList.remove("active")
    pontuacao.classList.add("active")
    pontuacao.textContent = contadorRespostaCorreta/4 //Eu dividi por 4 porque o contador ta multiplicando por 4 automaticamente

}