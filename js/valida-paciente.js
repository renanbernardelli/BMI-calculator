function validaPaciente(paciente){
    let listaErros = [];

    if (paciente.nome.length == 0) {
        listaErros.push('Nome do paciente inválido!')
    }

    if (!validaPeso(paciente.peso) || paciente.peso.length == 0) {
        listaErros.push('Peso do paciente inválido!');
    }
    
    if (!validaAltura(paciente.altura) || paciente.altura.length == 0) {
        listaErros.push('Altura do paciente inválida!');
    }

    if (paciente.gordura.length == 0 || paciente.gordura <= 0 ) {
        listaErros.push('Gordura do paciente inválida!')
    }

    return listaErros;
}

function exibeMensagemErro(erros){
    let ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';
    erros.forEach(function(erro){
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}