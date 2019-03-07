/* 
0 Obter um usuário
1 Obter o numero de telefone de um usuáro apartir do seu Id
2 Obter o endereco do usuário pelo id
*/
function obterUsuario(callback) {
    setTimeout(() =>{
        return callback(null, { 
            id: 1,
            nome: 'Aladim',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback){
    setTimeout(() =>{
        return callback(null, {
            telefone: 940262001,
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos bobos',
            numero: 0
        })
    }, 2000);
}
function resolverUsuario(erro, usuario){
    console.log('usuario', usuario);
}

obterUsuario(function resolverUsuario(error, usuario){
    // null || "" || 0 === false
    if(error){
        console.error('DEU RUIM em USUÁRIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('DEU RUIM em TELEFONE', error)
            return;
        }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
        if(error2){
            console.error('DEU RUIM em ENDEREÇO', error)
            return;
        }
        console.log(`
        Nome: ${usuario.nome},
        Endereço: ${endereco.rua}, ${endereco.numero},
        Telefone: (${telefone.ddd}) ${telefone.telefone}
        `)
    })
   
    })
})
