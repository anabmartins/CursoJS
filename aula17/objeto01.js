let amigo = {nome: 'José',
sexo: 'M',
peso: 8.5,
engordar(p=0){
    console.log('Engordou');
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
console.log(typeof amigo);

const fruits = [
    {
        name: 'Orange',
        quantity: 23,
    },
    {
        name:'Strawberry',
        quantity: 20,
    },
    {
        name:'Grape',
        quantity: 22,
    },
];

console.table(fruits)
// recebe um array ou object e cada elemento 
//ou propriedade enumerada, será uma linha da sua tabela
