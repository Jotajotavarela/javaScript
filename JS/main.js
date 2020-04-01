/*var nome = "Junior Varela";
var n1 = 22;
var n2 = 27;
var frase= "Sai Manu";
//alert(nome + ", têm " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Manu", "Prior!").toLocaleUpperCase());
console.log(frase.replace("Manu", "Prior!").toLocaleLowerCase());
alert(frase.replace("Manu", "Prior!"));

var lista = ["maçã", "uva", "laranja"];
//lista.pop();
lista.push("pêra");
console.log(lista);
//console.log(lista.reverse()); Inverte a lista
console.log(lista.toString());
console.log(lista.join(" - "));

var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.nome + " " + fruta.cor);

var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"verde"}];
console.log(frutas);
alert(frutas[1].nome + " " + frutas[1].cor);

var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade.");
} else {
    alert("Menor de idade."); 

var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
var count;
for (count=0; count <= 5; count++){
    alert(count);
}

var d = new Date();
alert(d.getMonth()+1);
alert(d.getMinutes()+1);
alert(d.getYear()+1900);

function soma(n1, n2){
    return n1 + n2;
}
 function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
 }
alert(setReplace("Vai Brasil", "Brasil", "Japão"));
alert(soma(5,10));

function soma(n1, n2){
    return n1 + n2;
}

var idade = prompt("Qual a sua idade?");
console.log(validarIdade(idade));
function validarIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
    
}

var validar = 0;
var idade = prompt("Qual a sua idade?");
validarIdade(idade);
console.log(validar);
function validarIdade(idade){
       if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
    
}
*/
function clicou(){
    
    document.getElementById("ordem").innerHTML = "<b>Vai sair!</b>";
    //console.log(document.getElementById("ordem"));
    //alert("Amém");
}
function redirecionar(){
    // window.open("https://br.leagueoflegends.com/pt-br/"); Abrir em outra aba
    //window.location.href = "https://br.leagueoflegends.com/pt-br/"; Abrir na mesma aba
}

function trocar(element){
    //alert("Olha de novo");
    // document.getElementById("mousemove").innerHTML = "Prior vai sair :)"
    element.innerHTML = "Prior vai sair :)"
}
function voltar(element){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse"
    element.innerHTML = "Passe o Mouse"
}

function load(){
    alert("Página Carregada!")
}
function funcaoChange(element){
    console.log(element.value);
}