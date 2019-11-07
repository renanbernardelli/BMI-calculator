let botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    let form = document.querySelector('#form-adiciona');

    let paciente = obtemValoresFormulario(form);

    let pacienteTr = montaTr(paciente);

    let erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemErro(erros);
        return;
    }

    let tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

    form.reset();
    
    let mensagemErro = document.querySelector('#mensagens-erro');
    mensagemErro.innerHTML ='';
});

function obtemValoresFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    
    let pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    let nomeTd = montaTd(paciente.nome, 'info-nome');
    let pesoTd = montaTd(paciente.peso, 'info-peso');
    let alturaTd = montaTd(paciente.altura, 'info-altura');
    let gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    let imcTd = montaTd(paciente.imc, 'info-imc');

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    /*
    também é possível deixar o código ainda mais limpo atribuindo o montaTd() direto ao appendChild():
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
     */

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)
    return td;
}

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