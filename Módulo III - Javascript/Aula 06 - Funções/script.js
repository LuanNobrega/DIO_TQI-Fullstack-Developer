const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Luan',
        nota: 3,
        turma: '2C',
    },
];

//ATIVIDADE 1:

function alunosAprovados(arr, media) {
    let aprovados = [];
    for (let i = 0; i < arr.length; i++ ){
        if(arr[i].nota >= media){
            aprovados.push(arr[i].nome);
        }
    }
    
    return aprovados;
}
console.log(alunosAprovados(alunos, 5))



// Segundo método:

function alunosAprovados(arr, media) {
    let aprovados = [];
    for (let i = 0; i < arr.length; i++ ){
        const { nota, nome} = arr[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    
    return aprovados;
}
console.log(alunosAprovados(alunos, 5))


// ATIVIDADE 2:

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;  
}

const pessoa1 = {
    nome: 'Maria',
    idade: 42,
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
};

const pessoa3 = {
    nome: 'Luan',
    idade: 5,
};

console.log(calculaIdade.call(pessoa2, 30));