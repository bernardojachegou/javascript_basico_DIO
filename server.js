// //Variáveis em JS
// var nome = "Michel Bernardo"; // variável com string
// var idade = 10; // variável com int
// var idade2 = 28; // variável com int
// var frase = "Japão é o melhor time do mundo"; // variável com string

// console.log(nome); //impressão davariável no console
// console.log(idade + idade2); //soma das variáveis int no console
// console.log(frase.replace("Japão", "Brasil")); //Impressão da string com alteração do nome
// console.log(frase.toUpperCase()); //Impressão da string com todas as letras maiúsculas

// //Trabalhando com array 
// var lista = ["uva", "goiaba", "banana"]; //Cria uma lista com vários elementos
// lista.pop(); //Retira o último elemento da lista
// lista.push("banana"); //Adiciona um elemento a lista
// console.log(lista); //Imprime a lista
// console.log(lista.length); //Imprime o tamanho da lista
// console.log(lista.reverse()); //Imprime a lista ao contrário
// console.log(lista.toString()); //Imprime a lista na forma de string

// //Trabalhando com objetos
// var fruta = { nome: "banana", cor: "amarela", tamanho: "pequena" }; // Cria um objeto
// console.log(fruta.tamanho); //Imprime a informação tamanho do objeto
// console.log(fruta.cor); //Imprime a informação cor do objeto
// console.log(fruta); //Imprime todas as informações do objeto

// //Trabalhando com vários objetos
// var frutas = [ //Cria um array com vários objetos
//     { nome: "banana", cor: "amarela", tamanho: "pequena" }, 
//     { nome: "uva", cor: "roxa", tamanho: "grande" }, 
//     { nome: "maça", cor: "vermelha", tamanho: "pequena" }
// ];
// console.log(frutas); //Imprime todas as informações de todos os objetos do array

// //Condicionais em JS
// var idade = prompt("Digite a sua idade!");
// if(idade >= 18) {
//     document.write("Autorizado");
// } else {
//     document.write("Não autorizado");
// }

// //Laços de repetição com WHILE
// var contador = 1;
// while (contador <= 5) {
//     console.log(contador);
//     contador++;
// }

// //Laços de repetição com FOR
// var contador;
// for (contadora = 1; contadora <= 5; contadora++) {
//     console.log(contadora);
// }

// var data = new Date();
// console.log(data); //Trás as informações relacionadas a data/hora/mês/ano
// console.log(data.getMonth()+1); //Inicia a contagem em 0
// console.log(data.getTime()); //Mostra informações de tempo em segundos

// //Funções em JavaScript
// function Multiplica(numero1, numero2) { //Recebe os parâmetros que serão utilizados na função
//     var numero1 = prompt("Digite o primeiro número"); //Atribui um valor ao parâmetro 01
//     var numero2 = prompt("Digite o segundo número"); //Atribui um valor ao parâmetro 02
//     return console.log(numero1 * numero2); //Retorna os parametros recebidos e multiplicados
// }

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function SetReplace(frase, nome, sobrenome) { //Recebe os parâmetros que serão utilizados na função
//     return frase.replace(nome, sobrenome); //Retorna os parametros recebidos
// }

// console.log(SetReplace("Michel chegou aqui", "Michel", "Bernardo")); //Imprime a função com os valores passados

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var validar = 0; //Variável que será utilizada como valor booleano
// function ValidaIdade(idade) {
//     if (idade >= 18) {
//          validar = true; //Se a idade for maior que 18 a variável será verdadeira
//     } else {
//          validar = false; //Se a idade for maior que 18 a variável será falsa
//     }
//     return validar; //Retorna a variável de acordo com a condição
// }

// var idade = prompt("Digite a sua idade!"); //Recebe o valor da variável idade;
// ValidaIdade(idade); //Passa o valor recebido para função
// console.log(validar); //Retorna a variável de pois de passar pela função

// function Clicou() {
//     return document.getElementById("obrigado").innerHTML = "<p>Obrigado por clicar aqui!</p>";
// };

// function Redirecionar() {
//     return window.open("https://www.tibia.com/news/?subtopic=latestnews");
// }

// function funcaoChange(elemento) {
//     return console.log(elemento.value);
// }