const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ")
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

    const frequencias = contaFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(oredernaPalavra)

    function oredernaPalavra(p1, p2) {
        return frequencia[p2] - frequencias[p1]

    }
    return ordenadas.slice(0.10)
}
funtion contaFrequencias(palavras){

    let frequencias = {};

    for (let i of palavras) {
        frequencias[i] = 0;

        for (let j of palavras) {
            if (i == j) {
                frequencias(i)++;
            }

        }

    }

    return palavras;


}