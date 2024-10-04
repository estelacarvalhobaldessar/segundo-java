const btnSoma = document.getElementById("soma");
btnSoma.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let soma = parseInt(numero1) + parseInt(numero2);
    document.getElementById("resultado").innerHTML =  "Resultado: " + soma;
});

const btnSubtracao = document.getElementById("subtracao");
btnSubtracao.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let subtracao = parseInt(numero1) - parseInt(numero2);
    document.getElementById("resultado").innerHTML =  "Resultado: " + subtracao;
});

const btnVezes = document.getElementById("vezes");
btnVezes.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let vezes = parseInt(numero1) * parseInt(numero2);
    document.getElementById("resultado").innerHTML =  "Resultado: " + vezes;
});

const btnDivisao = document.getElementById("divisao");
btnDivisao.addEventListener("click", () => {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let divisao = parseInt(numero1) / parseInt(numero2);
   document.getElementById("resultado").innerHTML =  "Resultado: " + divisao;
});