const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const trataErro = require('./erros/trataErro')
const fs = require("fs");

fs.readFile(link, "utf-8", (erro, texto) => {
  try {
    if(erro) throw(erro)
    contaPalavra(texto)
  } catch (erro) {
    console.log(trataErro(erro))
  }
});
function contaPalavra(texto) {
  const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verificarPalavras(paragrafo);
  });
  console.log(contagem);
}
function extraiParagrafos(texto) {
  return texto.toLowerCase().split("\n");
}
function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}
function verificarPalavras(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}
