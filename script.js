/*Código para cumprir Desafio - Corrigido*/

function encriptar() {
    var mensagem = document.getElementById('mensagem').value;
    var mensagemCriptada = '';

    /*condição de proibição na mensagem secreta*/
    if (/[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(mensagem)) {
        alert("A mensagem não pode conter letras maiúsculas ou caracteres especiais.");
        return;
    }

    for (var i = 0; i < mensagem.length; i++) {
        var charCode = mensagem.charCodeAt(i);
        mensagemCriptada += String.fromCharCode(charCode + 1); // Simplesmente adiciona 1 ao código ASCII de cada caractere
    }

    document.getElementById('mensagemCriptada').value = mensagemCriptada;

    /*Contagem regressiva de autodestruição da mensagem*/
    setTimeout(limparMensagemCriptada, 15000);
}

function descriptar() {
    var mensagemCriptada = document.getElementById('mensagemCriptada').value;
    var mensagemDescriptada = '';

    for (var i = 0; i < mensagemCriptada.length; i++) {
        var charCode = mensagemCriptada.charCodeAt(i);
        mensagemDescriptada += String.fromCharCode(charCode - 1);
    }

    document.getElementById('mensagemDescriptada').value = mensagemDescriptada;
}

function limparMensagemCriptada() {
    document.getElementById('mensagemCriptada').value = '';
}

function limparMensagemDescriptada() {
    document.getElementById('mensagemDescriptada').value = '';
}

function copiarMensagemCriptada() {
    var mensagemCriptada = document.getElementById('mensagemCriptada');
    mensagemCriptada.select();
    document.execCommand('copy');
}
