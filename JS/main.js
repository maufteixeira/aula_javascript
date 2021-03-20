// var nome="Mauricio";
// var idade=44;
// var idade2=10;
// var frase="Japão é o melhor time do mundo"



//*Exemplo de utilização do comando alert
// alert(nome + " tem "+idade+" anos");
//console.log(frase.toUpperCase()); */Retorna o conteúdo em caixa alta
//console.log(frase.toLowerCase()); */Retorna o conteúdo em caixa baixa


//*Exemplo de utilização do console do navegador
// console.log(nome);
// console.log(idade);


//*Exemplo de utilização do comando replace
//console.log(frase.replace("Japão","Brasil")); */substitui a primeira palavran pela segunda


//*Exemplo de uso de Array e Dicionário
// var lista = ["maçã","pera","laranja"];
// var frutas = [{Nome:"MAÇÃ", Cor:"Verde", Quantidade:"100"},*/DICIONÁRIO
//               {Nome:"uva", Cor:"roxa", Quantidade:"200"}
//             ];
// console.log(frutas[1].Nome);
// console.log(frutas);
// alert(frutas[1].Cor);


// lista.push("uva"); */Adiciona item a lista
//lista.pop(0); */Exclui o último item da lista
//console.log(lista.length); /*Quantidade de ítens da lista
//console.log(lista.reverse()); */Lista reversa


//*Exemplo de manipulação de string contida em lista
// console.log(lista.toString()); */exibe o conteúdo da lista em formato texto
// console.log(lista.join(" ")); */permite configurar o separador de ítens("-",",",";","|")ou remove-lo("")


//*Exemplo de utilização de laço de repetição com comando while
// var count=0;
// while (count<=5){
//   console.log(count);
//   count++
// };



//*Exemplo de utilização de laço de repetição com comando for
// var count;
// for (count = 0; count<=5; count++){
//   alert(count);
// };



//*Exemplo de condicional(comandom "if" e "else) com a utilização do comando prompt
// var idade = prompt("Qual a sua idade?");
// if (idade>=18){
//   alert("Maior de idade");}
// else{
//   alert("Menor de idade");
// };


//*Exemplo de manipulação de datas em Javascript
// var d = new Date()
// alert(d);
// alert(d.getMonth()+1); */retorna o mês
// alert(d.getDay()); */retorna o dia
// alert(d.getMinutes()); */retorna os minutos
// alert(d.getHours()); */retorna a hora


//*Exemplo de utilização de funcões em Javascript
// function soma(n1, n2){   */retorna uma soma
//   return n1 + n2;
// };
//
// function setReplace(frase, nome, novo_nome){   */retorna substituição de palavras na frase
//   return frase.replace(nome, novo_nome);
// };
//
// var validar;  */variavel global (fora da função)
// function validaIdade(idade){    */retorna verdadeiro ou falso de acordo com a idade informada no prompt
//   validar;
//   if(idade >=18){
//     validar = true
//   }else{
//     validar = false
//   }
//   return validar;
// }
//
// var idade = prompt("Qual sua idade?");
// validaIdade(idade);
// console.log(validar);
//
//
// alert(soma(5, 10))
// alert(setReplace("Vai Japão", "Japão", "Brasil"));


//*Exemplo de função utilizando evento onclick de um botão
// function clicou(){
//   document.getElementById("1").innerHTML="<b>Obrigado por clicar</b>"; */utilização do comando getElementById
// };


//*Exemplo de função utizando evento onclick de um paragrafo para redirecionar a outro site
// function redir(){
//   window.open("https://github.com/maufteixeira/aula_javascript/tree/main");  //*/abre link em nova aba
//   window.location.href="https://github.com/maufteixeira/aula_javascript/tree/main";  //*/abre link na mesma aba
// };


//*Exemplo de utilização do evento onmouseover(mouse sobre a frase) para obter outra frase
// function mousemove(elemento){
//   //alert("Trocar texto"); */ dispara um alert
// //  document.getElementById("2").innerHTML="<b>Obrigado por passar o mouse</b>"; */ utiliza o id do elemento
//   elemento.innerHTML = "<b>Obrigado por passar o mouse</b>"; */ passa o próprio elemento como parâmetro
// };


//*Retorna a frase ao estado original
// function voltar(elemento){
//   //document.getElementById("2").innerHTML="Passe o mouse aqui";
//   elemento.innerHTML = "Passe o mouse aqui";
// };


//*Exemplifica o uso do evento onload do body do html
// function load(){
//   alert("pagina carregada");
// };


//*Retorna no console o valor selecionado através do evento onchangen da tag select do html
// function change(elemento){
//   console.log(elemento.value)
// }
