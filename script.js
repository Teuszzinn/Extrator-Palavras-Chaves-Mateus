const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", MostraPalavrasChave);

function MostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavras = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ")
}


function processaTexto(texto){
    let palavra = texto.split(/\P{L}+/u)

return palavra;
}





















































