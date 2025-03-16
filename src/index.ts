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

// Exercício 3
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

console.log(inverterArray([1, 2, 3, 4]));
console.log(inverterArray(["a", "b", "c", "d"]));

// Exercício 4
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];

    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }

    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Gabriel", email: "gabriel@email.com" });
repo.salvar({ nome: "João", email: "joao@email.com" });
console.log(repo.obterTodos());

// Exercício 5
type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Mensagem do servidor: ${resposta}`);
    } else {
        console.log(`Status da resposta: ${resposta ? "Sucesso" : "Falha"}`);
    }
}

processarResposta("Operação concluída");
processarResposta(true);
processarResposta(false);

// Exercício 6
interface Estudante {
    nome: string;
    curso: string;
}

interface Trabalhador {
    empresa: string;
    cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Mariana",
    curso: "Engenharia de Software",
    empresa: "TechCorp",
    cargo: "Desenvolvedora Júnior"
};

console.log(estudanteTrabalhador);