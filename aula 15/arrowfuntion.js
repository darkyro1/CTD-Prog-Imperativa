let arrow = (x, y) => x + y;
console.log(arrow(2, 3));

//-------------------

let arrow1 = x => x + 6;
console.log(arrow1(2));


//-------------------

let arrow2 = (x, y) => {
    return x + y;
}
console.log(arrow2(3, 3));


//-------------------

function soma(a, b, cb) {
    return a + b + cb();
}

function texto() {
    return " esse é o resultado ";
}

console.log(soma(5, 6, texto));


//-------------------

function soma1(a, b, cb) {
    let result = a + b;
    return cb(result);
}

// function texto1(p1) {
//     return " esse é o resultado ";
// }

console.log(soma1(8, 4, function(p) {
    return ' esse é o resultado ' + p;
}));