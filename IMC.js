function calcularIMC()
{

    let peso = parseFloat(document.getElementById("Peso").value);
    let altura = parseFloat(document.getElementById("Altura").value);

        if (!peso || !altura) {
        alert("Preencha todos os campos corretamente!");
        return;
    }


    let imc = peso / (altura * altura);

    document.getElementById("resultadoIMC").innerHTML = 
    "Seu IMC é: " + imc.toFixed(2);

    let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 25) {
            classificacao = "Peso normal";
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }
        let resultadoBox = document.querySelector(".resultado");

// Remove classes antigas
resultadoBox.classList.remove(
    "imc-baixo",
    "imc-normal",
    "imc-sobrepeso",
    "imc-obesidade"
);

// Adiciona a classe correta
if (imc < 18.5) {
    resultadoBox.classList.add("imc-baixo");
} else if (imc < 25) {
    resultadoBox.classList.add("imc-normal");
} else if (imc < 30) {
    resultadoBox.classList.add("imc-sobrepeso");
} else {
    resultadoBox.classList.add("imc-obesidade");
}

    document.getElementById("classificacaoIMC").innerHTML = "Classificação: " + classificacao;

    resultadoBox.classList.add("ativo");
}
function limparCampos(){
    document.getElementById("Peso").value = "";
    document.getElementById("Altura").value = "";

    document.getElementById("resultadoIMC").innerHTML = "";
    document.getElementById("classificacaoIMC").innerHTML = "";

    const resultadoBox = document.querySelector(".resultado");

    resultadoBox.classList.remove(
        "imc-baixo",
        "imc-normal",
        "imc-sobrepeso",
        "imc-obesidade",
        "ativo"
    );
}