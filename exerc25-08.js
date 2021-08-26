function microondas(menu, tempo) {
    let tempoPadrao = 0
    switch (menu) {
        case 'pipoca':
            tempoPadrao = 10    
            break;
        case 'macarrrao':
            tempoPadrao = 8
            break;
        case 'carne':
            tempoPadrao = 15
            break;
        case 'feijao':
            tempoPadrao = 12
            break;
        case 'brigadeiro':
            tempoPadrao = 8
            break;
    }
    if (tempoPadrao == 0){
        console.log("Prato Inexistente")
    } else if (menu == menu && tempo >= tempoPadrao && tempo < 20) {
        console.log('Prato pronto, bom apetite!!!');
    } else if (menu == menu && tempo >= tempoPadrao * 2 && tempo < 30) {
        console.log('A comida queimou');
    } else if (menu == menu && tempo >= tempoPadrao * 3) {
        console.log("kabumm");
    } else if (menu == menu && tempo < tempoPadrao){
        console.log('Tempo insuficiente');
    } else if (menu != menu) {
        console.log('Prato inexistente');
    }

}
microondas('brigadeiro', 25)
