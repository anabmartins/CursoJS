let valores = [9, 1, 7, 4, 2, 8]
valores.sort()
console.log(valores);

// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
// } 

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
} // mesma função simplificada (para - dentro)


