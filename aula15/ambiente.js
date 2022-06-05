let num = [5, 8, 2, 9, 3]
num[5] = 7 // cria uma posição e um valor
num.push(4) // insere elementos na array
num.sort() // ordena em crescente

console.log(`Nosso vetor é o ${num}`); 
console.log(`O primeiro valor do vetor é ${num[0]}`); // o primeiro elemento começa no 0
console.log(`O vetor tem ${num.length} posições`); // comprimento da array

let pos = num.indexOf(1)
if (pos == -1)
{
    console.log(`O valor não foi encontrado!`);
} else 
{
    console.log(`O valor está na posição ${pos}`);
}

