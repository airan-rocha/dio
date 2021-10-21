// var log = (log) => {
//     console.log(log);
// };

log("testando");

var a = 15;
var b = 8;

var sum = (a, b) => a + b;
var sub = (a, b) => a - b;

log(`soma: ${a}+${b}=${sum(a, b)}`);
log(`subtração: ${a}-${b}=${sub(a, b)}`);

function log(log) {
    console.log(log);
};

var sum = (a, b = 0) => a + b;

console.log(sum(5, 4));