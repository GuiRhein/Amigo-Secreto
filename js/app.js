let listaDeAmigos = [];
let listaDeAmigos2 = [];
let listaDeAmigosNaTela= [];
let lista = document.getElementById("lista-amigos");
let sorteio = document.getElementById("lista-sorteio");

function limpaCampo(){
    campo = document.querySelector("input");
    campo.value = "";
}

function adicionar(){
    amigo = document.getElementById("nome-amigo").value;
    listaDeAmigos.push(amigo);
    listaDeAmigosNaTela.push(" " + amigo);
    limpaCampo();
    texto = amigo
    lista.innerHTML = listaDeAmigosNaTela;
    console.log(lista);
}

function sortear(){
    inicio = listaDeAmigos;
    sorteio.innerHTML = " ";
    
    while (listaDeAmigos.length != []){
        let sorteador = Math.floor(Math.random() * ((listaDeAmigos.length -1) - 1 + 1)) + 1;
        console.log(sorteador)
        console.log(listaDeAmigos[0] + listaDeAmigos[sorteador])
        for (let i = 0; i < listaDeAmigos.length; i++) {
            if (listaDeAmigos[i] != listaDeAmigos[sorteador] && listaDeAmigos[i] != listaDeAmigos[0]) {
            // console.log(listaDeAmigos);
                listaDeAmigos2.push(listaDeAmigos[i]);
            //console.log(listaDeAmigos[i]);
            }
        }
        let HTMLTemporario = sorteio.innerHTML;

        HTMLNovo =' <p>' + listaDeAmigos[0] + " -> " + listaDeAmigos[sorteador] + '</p>'
    
        HTMLTemporario = HTMLNovo + HTMLTemporario;
    
        sorteio.innerHTML = HTMLTemporario;    
             
        
        listaDeAmigos = listaDeAmigos2;
        listaDeAmigos2 = [];
        
        console.log(listaDeAmigos);

    }

    listaDeAmigos = inicio;

}

function reiniciar(){
    listaDeAmigos = [];
    listaDeAmigosNaTela= [];
    lista.innerHTML = listaDeAmigosNaTela; 
    sorteio.innerHTML = " ";
}