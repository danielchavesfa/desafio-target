const palavra = 'Me contrato, por favor!'.split('');
const palavraInvertida = [];

for(let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida.push(palavra[i]);
}

console.log(palavraInvertida.join(''));