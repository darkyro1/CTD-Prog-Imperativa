var menu = 6
var aumentar = true
var diminuir = false
var tempoUsuario = 0

if ((menu < 1) || (menu >5)) {
    console.log("Prato inexistente")
}
else if ((aumentar) && (menu > 0) && (menu < 6)) {
    let prato = aumentarTempo(menu, tempoUsuario)
    console.log(prato)
}
else if ((diminuir) && (menu > 0) && (menu < 6)) {
    let prato = diminuirTempo(menu, tempoUsuario)
    console.log(prato)
}

function aumentarTempo (menu, tempoUsuario) {
    let tempoPadrao = 0
    let tempoTotal = 0
    switch (menu) {
        case 1:
            tempoPadrao = 10
            tempoTotal = tempoPadrao + tempoUsuario
            break;
         case 2:
            tempoPadrao = 8
            tempoTotal = tempoPadrao + tempoUsuario
            break;
        case 3:
            tempoPadrao = 15
            tempoTotal = tempoPadrao + tempoUsuario
            break;
        case 4:
            tempoPadrao = 12
            tempoTotal = tempoPadrao + tempoUsuario
            break;
        case 5:
            tempoPadrao = 8
            tempoTotal = tempoPadrao + tempoUsuario
            break;
    }
    if (tempoTotal > (2 * tempoPadrao) && (tempoTotal < (3 * tempoPadrao))) {
        return "A comida queimou"
    }
    else if (tempoTotal > (3 * tempoPadrao)) {
        return "Kabumm"
    }
    return "Prato pronto, bom apetite"
}

function diminuirTempo (menu, tempoUsuario) {
    let tempoPadrao = 0
    let tempoTotal = 0
    switch (menu) {
        case 1:
            tempoPadrao = 10
            tempoTotal = tempoPadrao - tempoUsuario
            break;
         case 2:
            tempoPadrao = 8
            tempoTotal = tempoPadrao - tempoUsuario
            break;
        case 3:
            tempoPadrao = 15
            tempoTotal = tempoPadrao - tempoUsuario
            break;
        case 4:
            tempoPadrao = 12
            tempoTotal = tempoPadrao - tempoUsuario
            break;
        case 5:
            tempoPadrao = 8
            tempoTotal = tempoPadrao - tempoUsuario
            break;
    }
    if (tempoTotal >= tempoPadrao) {
        return "Prato pronto, bom apetite"
    }
    return "Tempo insuficiente"
}