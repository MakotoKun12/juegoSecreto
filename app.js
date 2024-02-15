let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Adivinaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no adivino
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',"¡El número secreto es menor!");
        }else{
            asignarTextoElemento('p',"¡El número secreto es mayor!");
        } 
    }
    intentos++;
    limpiarCaja();
}

function limpiarCaja(){
    return document.querySelector('#valorUsuario').value = '';
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    
    console.log('Numero generado: ', numeroGenerado);
    console.log('Lista de numeros sorteados: ', listaDeNumerosSorteados);
    
    //Si ya sorteamos todos los numeros
    if(listaDeNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.');
    } else{
        //Si el numero sorteado esta en la lista
        if(listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else{
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del numero secreto");
    asignarTextoElemento('p',`Elige un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;   
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();