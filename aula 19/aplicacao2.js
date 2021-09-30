let recebendo = require("./aplicacao");


var result = recebendo.reduce(function(map, obj) {
  map[obj.altura] = obj.sexo;
  return map;
}, {});

console.log(result);