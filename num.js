var n1 = 1543.5

n1.toFixed(2) //  fixa em duas casas decimais
n1.toFixed(2).replace('.',',') // troca . por ,
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // localiza a moeda do Brasil para usar o $ no início

var n = 3

n += 4 // n = n + 4 
n -= 5 // n = n - 5  
n *= 4 // n = n * 4 
n /= 2 // n = n / 2 
n **= 2 // n = n ** 2
n %= 5 // n = n % 5 

var x = 5

x ++ // + 1
x -- // - 1

console.log(x); // 4
