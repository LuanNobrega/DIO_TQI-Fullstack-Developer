/* VARIÁVEIS 
var numberOne;
numberOne = 1;

console.log(numberOne + 2);

var firstName = 'João';
let lastName = 'Souza'

if(firstName === 'João'){
    let lastName = 'Luan';
    var firstName = 'Pedro';
    lastName = 'Silva'

    console.log(lastName)
}

console.log(firstName, lastName)

// CONSTANTES:

const FIRST_NAME = 'Luan';

console.log(FIRST_NAME)*/

// ESTRUTURA DE DADOS:

//ATIVIDADE 1:

// SOLUÇÃO 1:

function verificaPalidromo(string){
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

console.log(verificaPalidromo("gato"))

// SOLUÇÃO 2:
// omo
function verificaPalidromo2(string){
    if(!string) return "string inexistente";

    for( let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
        return false;
        }
    }
    return true
}


console.log(verificaPalidromo2("gato"))


// ATIVIDADE 2:

function substituiPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0) {
            console.log("Você já é zero")
        }else 
            if(array[i] % 2 === 0){
                console.log(`Substituindo ${array[i]} por 0 ...`)
                array[i] = 0;
            }
        
    }
    return array;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(array))