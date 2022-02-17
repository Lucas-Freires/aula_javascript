//var lista = ["maçã", "pera", "laranja"];
//var nome = "Lucas Freires";
//var idade = 30;
//var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos.");
//console.log(nome);
//console.log(idade);
//alert(frase.replace("Japão", "Brasil"));
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));
/*var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"uva", cor:"roxo"}]
console.log(frutas);
alert(frutas[1].nome)

var fruta = {nome:"maçã", cor:"vermelho"}
console.log(fruta.nome);
*/
/*var idade = prompt("Qual sua idade?")
if (idade >= 18){
    alert("maior de idade")
} else{
    alert("menor de idade")
}*/
/*var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
}
*/
/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};*/
//var d = new Date();
//alert(d.getMinutes())

/*function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,10));
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}
function redirecionar(){
    window.open("http://www.google.com.br");
    //window.location.href = "http://www.google.com.br"
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
    //alert("trocar texto")
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}