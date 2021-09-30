let produtos = [
  "Abacaxi",
  "Pera",
  "Manga",
  "Uva"
]

//.join()
let prod = produtos.join(" - ");
console.log(".join() - realiza a união dos elementos dentro de uma string: " + prod);
console.log(produtos);
console.log("----------------------------------------------------------");

//.pop()
let prod1 = produtos.pop();
console.log(".pop() - remove da string o ultimo elemento: "+ prod1);
console.log(produtos);
console.log("----------------------------------------------------------");

//.push()
let prod2 = produtos.push("Uva-Verde");
console.log(".push() - adiciona no final da string um novo element e retorna o lenght do array: " + prod2);
console.log(produtos);
console.log("----------------------------------------------------------");

//.shift()
let prod3 = produtos.shift();
console.log(".shift() - remove do array o primeiro elemento: " + prod3);
console.log(produtos);
console.log("----------------------------------------------------------");

//.unshift()
let prod4 = produtos.unshift("Mamão, Melão, Banana");
console.log(".unshift() - adiciona no inicio do array novo elementos e retorna o lenght do array: " + prod4);
console.log(produtos);
console.log("----------------------------------------------------------");