function trataErro(erro) {
    if(erro.code === 'ENOENT'){
        return('arquivo não encontrado')
    }else{
        return ('erro na aplicaço')
    }
}
module.exports = trataErro