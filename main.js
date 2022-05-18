document.getElementById("cifraC").addEventListener("click", novaSessao);
document.getElementById("b64").addEventListener("click", novaSessao);
document.getElementById("codi").addEventListener("click", codificar);
document.getElementById("decodi").addEventListener("click", decodificar);
document.getElementById("botao").addEventListener("click", botao);


function botao(event) {
    event.preventDefault();
    if(event){codificarCifra(document.getElementById("input1").value,parseInt((deslocamento.value)) , decodi.checked);
}   
    document.getElementById("input2").value =(codificarCifra( document.getElementById("input1").value, parseInt((deslocamento.value)) , decodi.checked))   
}

// Adiciona uma sessao para digitar o deslocamento caso esteva selecionado Cifra de Cezar
function novaSessao() {
    if (document.getElementById("cifraC").checked) {
        escolha.style.display = "block"
    }
    if(document.getElementById("b64").checked){
        escolha.style.display = "none"
    }

}


// Trocar mensagem do botão
function codificar(){
    trocaNome(codi, "Codificar mensagem")
}
function decodificar(){
    trocaNome(decodi, "Decodificar mensagem")
}


function trocaNome(id, mensagem) {
    if (id) {
        botao.innerHTML = mensagem
    }
}



function codificarCifra(string , passo,deco=false) {

    let codificacao = ''
    for(i=0;i<string.length;i++){
        let numero = string.charCodeAt(i)

        if(deco){

            codificacao += String.fromCharCode(numero-passo)
        }
        else{

            codificacao += String.fromCharCode(numero+passo)
        }
    
    }
    return codificacao
}
const  deslocamento = document.getElementById("escolha");
console.log(deslocamento)
console.log(codificarCifra( document.getElementById("input1").value, parseInt(deslocamento.value)))
console.log(codificarCifra(document.getElementById("input1").value, parseInt(document.getElementById("escolha").value) , decodi.checked))

