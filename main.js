// Chamadas das funções
document.getElementById("cifraC").addEventListener("click", novaSessao);
document.getElementById("b64").addEventListener("click", novaSessao);
document.getElementById("codi").addEventListener("click", codificar);
document.getElementById("decodi").addEventListener("click", decodificar);
document.getElementById("botao").addEventListener("click", acao);

const deslocamento = document.getElementById("escolha");

// Evita o comportamento padrao do FORM e executa a função do botão marcado.
function acao(event) {
    event.preventDefault();
    if (event && cifraC.checked) {

        codificarCifra(document.getElementById("mensagem-usuario").value, parseInt((deslocamento.value)), decodi.checked);
        document.getElementById("resultado").value = (codificarCifra(document.getElementById("mensagem-usuario").value, parseInt((deslocamento.value)), decodi.checked));
        return
    }
    else if (event && b64.checked); {

        base64(document.getElementById("mensagem-usuario").value, decodi.checked);
        document.getElementById("resultado").value = (base64(document.getElementById("mensagem-usuario").value, decodi.checked))
        return
    }

}

// Adiciona uma sessao para digitar o deslocamento caso esteva selecionado Cifra de Cezar.
function novaSessao() {
    if (document.getElementById("cifraC").checked) {
        escolha.style.display = "block"
    }
    else if (document.getElementById("b64").checked) {
        escolha.style.display = "none"
    }

}


// Trocar mensagem do botão
function codificar() {
    trocaNome(codi, "Codificar mensagem")
}
function decodificar() {
    trocaNome(decodi, "Decodificar mensagem")
}

function trocaNome(id, mensagem) {
    if (id) {
        botao.innerHTML = mensagem
    }
}


// Codifica ou decodifica uma string com  Cifra de Cezar
function codificarCifra(string, passo, deco = false) {

    let codificacao = ''
    for (i = 0; i < string.length; i++) {
        let numero = string.charCodeAt(i)

        if (deco) {

            codificacao += String.fromCharCode(numero - passo)
        }
        else {

            codificacao += String.fromCharCode(numero + passo)
        }

    }
    return codificacao
}

// Codifica ou decodifica uma string com  Base64
function base64(string, deco = false) {
    let codificacaoBase64 = string
    if (deco) {
        codificacaoBase64 = atob(codificacaoBase64)
    }
    else {
        codificacaoBase64 = btoa(string)
    }
    return codificacaoBase64
}

