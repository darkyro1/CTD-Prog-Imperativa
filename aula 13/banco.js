//Criação de objeto literal "Conta", para utilização no cadastro de contas.

let Conta = function(numero, tipo, saldo, titular) {
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

//Criação de Json para armazenar os dados dos cliente (simulando um banco de dados dos clientes do banco).

let clientes = [{
        "numero": 5486273622,
        "tipo": "Conta Corrente",
        "saldo": 27771,
        "titular": "Abigael Natte",
    },

    {
        "numero": 1183971869,
        "tipo": "Conta Poupança",
        "saldo": 8675,
        "titular": "Ramon Connell",
    },

    {
        "numero": 5486273622,
        "tipo": "Conta Corrente",
        "saldo": 27771,
        "titular": "Abigael Natte",
    },

    {
        "numero": 9582019689,
        "tipo": "Conta Poupança",
        "saldo": 27363,
        "titular": "Jarret Lafuente",
    },

    {
        "numero": 1761924656,
        "tipo": "Conta Poupança",
        "saldo": 32415,
        "titular": "Ansel Ardley",
    },

    {
        "numero": 7401971607,
        "tipo": "Conta Poupança",
        "saldo": 18789,
        "titular": "Jacki Shurmer",
    },

    {
        "numero": 630841470,
        "tipo": "Conta Corrente",
        "saldo": 28776,
        "titular": "Jobi Mawtus",
    },

    {
        "numero": 4223508636,
        "tipo": "Conta Corrente",
        "saldo": 2177,
        "titular": "Thomasin Latour",
    },

    {
        "numero": 185979521,
        "tipo": "Conta Poupança",
        "saldo": 25994,
        "titular": "Lonnie Verheijden",
    },

    {
        "numero": 3151956165,
        "tipo": "Conta Corrente",
        "saldo": 7601,
        "titular": "Alonso Wannan",
    },

    {
        "numero": 2138105881,
        "tipo": "Conta Poupança",
        "saldo": 33196,
        "titular": "Bendite Huggett",
    },
];

//Realizar uma lista de objetos (Cadastro dos clientes)

let listClientes = [];
for (index in clientes) {
    listClientes.push(new Conta(clientes[index].numero, clientes[index].tipo, clientes[index].saldo, clientes[index].titular));
}

//Criação de objeto literal "Bank", para realizar os métodos "pesquisa de cliente", "depósito", "saque".

let Bank = {
    clientsBank: listClientes,
    searchClient: function(name) { //Método para realizar pesquisa de cliente.
        for (index in listClientes) {
            if (listClientes[index].titular == name) {
                return listClientes[index];
            }
        }
        return "Cliente não encontrado!";
    },
    deposit: function(name, amount) { //Operação para depósito.
        for (index in listClientes) {
            if (listClientes[index].titular == name) {
                listClientes[index].saldo += amount;
                return "Depósito realizado, seu novo saldo é R$" + listClientes[index].saldo;
            }
        }
    },
    withdraw: function(name, amount) { //Operação para saque.
        for (index in listClientes) {
            if (listClientes[index].titular == name) {
                listClientes[index].saldo -= amount;
                if (listClientes[index].saldo < 0) {
                    return "Fundos insuficientes";
                } else {
                    return "Extração feita com sucesso, seu novo saldo é: R$ " + listClientes[index].saldo;
                }
            }
        }
    },
}

//Imprimi dados do cliente.
console.log(Bank.searchClient("Alonso Wannan"));
console.log("------------------------------------------------------------")

//Imprimi comprovante de depósito e o saldo atual do cliente.
console.log(Bank.deposit("Alonso Wannan", 5000));
console.log("------------------------------------------------------------")

//Imprimi comprovante de saque e o saldo atual do cliente.
console.log(Bank.withdraw("Alonso Wannan", 7602));
console.log("------------------------------------------------------------")