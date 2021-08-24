function podeSubir(altura, acompanhada) {
    let verdade = true;
    let mentira = false;


    if (altura >= 1.40 && altura < 2.01) {
        console.log("A pessoa mede mais de 1,40m e menos de 2,00m: " + verdade);

    } else if (altura <= 1.40 && acompanhada == verdade) {
        console.log("A pessoa mede mais de um metro e 1,40m: ");

    } else if (altura <= 1.20 && acompanhada == mentira) {
        console.log("A pessoa mede menos de 1,20m e nao está acompanhada: ");
    }
    return mentira  
}
console.log(podeSubir(1.80, verdade));
