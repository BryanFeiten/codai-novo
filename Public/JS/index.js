// TIPOS DE VARIÁVEIS = LET, VAR, CONST
var nome = "Bryan Feiten";
var cargo = "Aluno - Growdev";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

console.log(nome);

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function logarNome() {
    console.log(nome);
}

function colocarCargonoHtml(cargo) {
    cargoHtml.innerHTML = cargo;
}

function clickNoProjetos() {
    console.log("clicou no botão Projetos");
    texto2.style.display = "block"
    texto1.style.display = "none"
}

function clickNoSobre() {
    console.log("clicou no botão Sobre");
    texto1.style.display = "block"
    texto2.style.display = "none"

}




colocarNomeNoHtml(nome);
colocarCargonoHtml(cargo);