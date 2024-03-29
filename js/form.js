let botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    let form = document.querySelector('#form-adiciona');

    let paciente = obtemValoresFormulario(form);

    let erros = validaPaciente(paciente);
    
    if (erros.length > 0) {
        exibeMensagemErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    
    let mensagemErro = document.querySelector('#mensagens-erro');
    mensagemErro.innerHTML ='';

    const cursorFocus = document.querySelector('#nome');
    cursorFocus.focus();
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

function adicionaPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
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