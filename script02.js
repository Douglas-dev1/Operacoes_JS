const divRoot = document.getElementById("root");

/*Calculadora*/
/*Obter dois valores*/

/*PARSEINT CONVERTE UM ASC EM INTEIRO*/
const valor1 = parseInt(prompt("Informe o valor 1"));
const valor2 = parseInt(prompt("informe o valor 2"));

const soma = valor1 + valor2;
const subtracao = valor1 - valor2;
const multiplicacao = valor1 * valor2;
const divisao = valor1 / valor2;
const resto = valor1 % valor2;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(resto);

const resultadoSoma = document.createElement("span");
resultadoSoma.textContent = valor1 + " + " + valor2 + "=" + soma;

const resultadoSub = document.createElement("span");
resultadoSub.textContent = valor1 + " - " + valor2 + "=" + subtracao;

const resultadoMult = document.createElement("span");
resultadoMult.textContent = `${valor1} * ${valor2} = ${multiplicacao}`

const resultadoDiv = document.createElement("span");
resultadoDiv.textContent = `${valor1} / ${valor2} = ${divisao}`

const resultadoRest = document.createElement("span");
resultadoRest.textContent = valor1 + "%" + valor2 + "=" + resto;

divRoot.appendChild(resultadoSoma);
divRoot.appendChild(document.createElement("br"));
divRoot.appendChild(resultadoSub);
divRoot.appendChild(document.createElement("br"));
divRoot.appendChild(resultadoMult);
divRoot.appendChild(document.createElement("br"));
divRoot.appendChild(resultadoDiv);
divRoot.appendChild(document.createElement("br"));
divRoot.appendChild(resultadoRest);