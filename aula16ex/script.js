let num = document.getElementById('num')
let valores = []

function adicionar() {
    if (((num.value >= 1) && (num.value <= 100)) && ((valores.indexOf(num.value)) == -1)) {
        valores.push(num.value)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}

function verificar(valor) {


}


function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione algum valor antes de finalizar!')
    } else {
        let maior = 0
        let menor = valores [0]
        let soma = 0
        let media
        let res = document.querySelector('div#res')
        valores.length == 1 ? res.innerHTML = '<p>Ao todo, temos 1 número cadastrado.</p>' : res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`        
        for (let pos in valores) {            
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
            soma += valores[pos]
            media = soma / valores.length
        }
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p>`

    }
}

/*
Escrever no final:
Ao todo, temos x números cadastrados.

O maior valor informado foi y.

O menor valor informado foi z.

Somando todos os valores temos soma.

A média dos valores digitados é media.
*/