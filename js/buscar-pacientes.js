const botaoBuscar = document.querySelector('#buscar-paciente');

botaoBuscar.addEventListener('click', function(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://api-pacientes.herokuapp.com/pacientes');

    xhr.send();

    xhr.addEventListener('load', function(){

        let erroAjax = document.querySelector('#erro-Ajax');

        if (xhr.status == 200) {

            erroAjax.classList.add('invisivel');

            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta)
            
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente)
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove('invisivel');
        }
    });
});