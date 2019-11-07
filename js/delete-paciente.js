let tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fade-out');

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
    
    /*let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.remove();*/
});

/*tabela.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        this.remove();
    });
});*/