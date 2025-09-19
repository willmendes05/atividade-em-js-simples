let numero = 7;

if (numero >= 7) {
  console.log("Numero é positivo");
} else if (numero < 7) {
  console.log("Numero é negativo");
} else if (numero = 0) {
  console.log("Numero é neutro");
}

let idade = 15

if (idade >= 18) {
  console.log("Você é uma pessoa doida");
} else if (idade < 18) {
  console.log("Você é apenas um adolescente maluco");
} else if (idade >= 30) {
  console.log("Você é jovem mais velho");
}

let w = ("good morning");

for (let w = 10; w >= 0; w--) {
    console.log("vai explodir", w);
    
    if (w <= 2)
        console.log("quase lá");

    if (w === 0) 
        console.log("KABUMMM!!");
    }

let tabuada = 5;

for (let i = 0; i <= 10; i++) {
    let resultado = tabuada * i;
    console.log(tabuada + " x " + i + " = " + resultado);
}

let contagem = 1;

while (contagem < 11) {
  console.log("contagem: " + contagem);
  contagem++;
}

let senha;

do {
  senha = prompt("Digite a senha correta e descubra um novo mundo: ");
  console.log(senha);
} while (senha !== "1234");


function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 8);
console.log("O resultado da soma é:", resultado);


const ehPar = (numero) => {
  return numero % 2 === 0;
};

console.log(ehPar(4));


function somarAte(numero) {
  let soma = 0;
  for (let i = 1; i <= numero; i++) {
    soma += i;
  }
  return soma;
}

console.log(somarAte(5));

function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(ehPrimo(10));
