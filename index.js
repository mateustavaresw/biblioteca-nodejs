
const caminhoArquivo = process.argv
const link = caminhoArquivo[2]
const fs = require('fs')
fs.readFile(link, 'utf-8', (erro,texto)=>{
    verificarDuplicadas(texto)
})
