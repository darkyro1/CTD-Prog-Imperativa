var cadastro = {
    "nome": "Heberth",
    "apelido": null,
    "idade": 27,
    "usuario": "darkyro1",
    "email": "haf_1005@hotmail.com"
}

console.log(cadastro.email);


let marca = {
    cor: "Azul",
    modelo: "320i",


    bmw: function() {
        console.log("O modelo do carro é: " + this.modelo + " " + "sua for é " + this.cor);
    }
}

marca.bmw();