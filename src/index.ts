// Exercício 1
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "1.8 Flex"
};

console.log(meuCarro);

// Exercício 2
interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;

console.log(multiplicar(5, 3));
console.log(multiplicar(10, 2));