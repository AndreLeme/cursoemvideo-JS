

let valores = [8, 3, 24, 46, 18, 4]
/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let ind = valores.indexOf(745)
if (ind = -1) {
    console.log('Valor não encontrado.')
} else {
console.log(`O valor 46 está na posição ${ind}`) 
} 