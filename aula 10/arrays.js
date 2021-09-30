let texto = [
  "X-Man",
  "Os Vingadores",
  "Homem-Aranha",
  "Flash"
];

//.push() - adiciona no final da array um novo elemento
texto.push("Batman");
console.log(texto);

//.pop() - remove o ultimo elemento da array
texto.pop();
console.log(texto);

//.shift() - remove o primeiro elemento da array
texto.shift();
console.log(texto);

//.unshift - adiciona 1 ou mais elementos no inicio da array
texto.unshift("Arqueiro Verde","Homem de Ferro");
console.log(texto);

//.join() - junta os elementos de um array usando um separador que especificamos. (Precisa ser atribuido a uma nova variavel)
let text = texto.join(" - ");
console.log(text);

//.lastindexOf() - começa a procurar o elemento do final para o começo, se houver elemento repetido ele retorna a posição do primeiro que encontrar.
let text1 = texto.lastIndexOf("Flash");
console.log(text1);

//.includes() - similar ao infexOf mas retorna um boleano
let text2 = texto.includes("Flash");
console.log(text2);
