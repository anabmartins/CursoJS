// operadores relacionais
5 > 2 // true
7 < 4 // false
8 >= 8 // true
9 <= 7 // false
5 == 5 // true
4 != 4 // false

preço >= 200.50 // o preço é maior ou igual a 200.50?
idade < 18 // a idade é menor do que 18?
curso == 'JavaScript' // o curso é JavaScript?
n1 != n2 // o primeiro número é diferente do segundo?

5 == 5 // true
5 == '5' // true
// operador de identidade (idêntico a)
5 === '5' // false

/*Lógicos
! negação
&& conjunção (e)
|| dijunção (ou) */

var a = 5
var b = 8 

a > b && b % 2 == 0 // false
a <= b || b / 2 == 2 // true

// ordem de execução: != - && - || 

idade >= 15 && idade <= 17 // a idade está entre 15 e 17?
estado == 'RJ' || estado == 'SP' // o estado é RJ ou SP?
salario > 1500 && sexo != 'M' // o salário é acima de 1500 e não é homem?

// ternário
// teste ? true : false
media>=7.0?"Aprovado":"Reprovado"

var x = 8
var res = x % 2 == 0 ? 5: 9 //5

var idade = 19
var r = idade >= 18 ? "Maior" : "Menor" // "Maior"
