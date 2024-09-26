/*OBTIVE A DIV COM O ID ROOT*/
const divRoot = document.getElementById("root");
/*IMPRIMINDO A DIV NO CONSOLE*/
console.log(divRoot);
const valor1 = 10;
const valor2 = 20;
/*CRIAMOS UM DE ELEMENTO DE TITULO NIVEL H1*/
const resultado = document.createElement("h1");
/*ATRIBUIMOS O VALOR DA SOMA DAS DUAS VARIAVEIS PARA A DIV DE TITULO*/
resultado.textContent = (valor1 + valor2);
/*ADICIONA A DIV RESULTADO DENTRO DA DIV ROOT*/
divRoot.appendChild(resultado);

/*CRIAMOS UMA DIV*/
const divValores = document.createElement("div");
/*ATRIBUIMOS O ID VALORES PARA A DIV */
divValores.setAttribute("id", "valores");
/*ADICIONA A DIV VALORES DENTRO DA DIV ROOT*/
divRoot.appendChild(divValores);

/*CRIAMOS UM DE ELEMENTO DE TITULO NIVEL H2*/
const h2Valor1 = document.createElement("h2");
/*ATRIBUIMOS O VALORE DA VARIAVEL PARA A DIV DE H2VALOR1*/
h2Valor1.textContent = valor1;
/*ADICIONA A DIV VALORES DENTRO DA DIV ROOT*/
divRoot.appendChild(h2Valor1);
