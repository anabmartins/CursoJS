let valores = [9, 1, 7, 4, 2, 8]
valores.sort()
console.log(valores);

// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
// } 

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
} // mesma função simplificada (para - dentro)

/*Como remover elementos repetidos de um 𝐀𝐫𝐫𝐚𝐲?
Com a utilização do Objeto 𝐒𝐞𝐭, é possível passar como parâmetro este 𝐀𝐫𝐫𝐚𝐲, e no fim será gerado um outro 𝐀𝐫𝐫𝐚𝐲 somente com um elemento de cada.
 */

const arrayOfNumbers = [1,1,4,3,5,6,4,8,6,9]
const arrayWithNoRepeatNumbers = [...new Set(arrayOfNumbers)]
console.log(arrayWithNoRepeatNumbers)

// Isto deve mostrar
//  [ 1, 4, 3, 5, 6, 8, 9 ]
