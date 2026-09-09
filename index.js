
const caminhoArquivo = process.argv
const link = caminhoArquivo[2]
const fs = require('fs')
fs.readFile(link, 'utf-8', (erro,texto)=>{
    verificarPalavras(texto)
})
//criar um array de palavras
//contar as ocorrencias
//montar objeto com resultado
// {
//     "web": 5,
//     "computador: 4",
// }
function verificarPalavras (texto){
    const listaPalavras = texto.split(' ')
    const resultado = {};
    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0 ) + 1
    });
    console.log(resultado)
}

