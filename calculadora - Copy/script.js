const display = document.querySelector(".display"); //essa variavel seleciona a tela onde serao exibidos os valores
const buttons = document.querySelectorAll("button"); // seleciona todos os botoes do html
const operadores = ["%", "*", "/", "-", "+", "="];
let output = ""; //armazena os números e operadores que o usuário insere na calculadora.

//Funcao para calcular o que o usuario digitar
const calculate = (btnValue) =>{
  display.focus();//metodo para que o usuário comece a digitar imediatamente sem precisar clicar na tela
  
  if (btnValue === "=" && output !== "") // s caso o botao seja o = e o campo nao esta vazio:
  {
    // onde tem % substitua por /100
    output = eval(output.replace("%", "/100"));
  } 

  else if (btnValue === "AC") // se for AC a saida sera uma string vazia
  {
    output = "";
  } else if (btnValue === "DEL") 
  {
    //se for DEL o ultimo caractere vai sair da tela
    output = output.toString().slice(0, -1);
  } else {
    //se a tela esta limpa e o botao for um operador entao retorna
    if (output === "" && operadores.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

//Evento para chamar a funcao 
buttons.forEach((button) => {
  //o valor associado ao botao passa para a funcao como argumento
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});