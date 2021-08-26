let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

function microondas(alimento, tempo) {
    if ((tempo >= alimento) && (tempo < (alimento * 2))) {
        console.log("Prato pronto, bom apatite!");
    } else if (tempo > (alimento * 2) && (tempo <= (alimento * 3))) {
        console.log("A comida queimou");
    } else if (tempo < alimento) {
        console.log("Tempo Insuficiente");
    } else {
        console.log("Kabuumm!!");
    }
}
microondas(feijao, 30);