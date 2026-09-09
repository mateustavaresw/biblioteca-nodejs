
const caminhoArquivo = process.argv
const link = caminhoArquivo[2]
const fs = require('fs')
fs.readFile(link, 'utf-8', (erro,texto)=>{
    quebraParagrafos(texto)
})
//criar um array de palavras
//contar as ocorrencias
//montar objeto com resultado
// {
//     "web": 5,
//     "computador: 4",
// }
function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
function verificarPalavras (texto){
    const listaPalavras = texto.split(' ')
    const resultado = {};
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0 ) + 1
        }
    });
    return resultado;
}
function quebraParagrafos (texto){
    const paragrafos = texto.toLowerCase().split('\n')
    const contagem = paragrafos.map((paragrafo)=>{
        return verificarPalavras(paragrafo)
    })
    console.log(contagem)
}

