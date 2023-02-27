const inputNumber = 91;

let n1 = 0, 
    n2 = 1, 
    n3 = n1 + n2;

for(let i = 0; i <= inputNumber; i++) {
    n2 = n1;
    n1 = n3;
    n3 = n1 + n2;
    i = n3;
}

n3 === inputNumber ? 
console.log(inputNumber + ' pertence a Fibonacci.') : 
console.log(inputNumber + ' não pertence a Fibonacci.');