function verificaSeOChuteEValido(chute) {
    const numero = + chute; //coloca o numero para um valor int

    if (numeroInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido</div>`
     return;
    }
    if (numeroForMaiorOuMenorQuePermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id"jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function numeroForMaiorOuMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function numeroInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
