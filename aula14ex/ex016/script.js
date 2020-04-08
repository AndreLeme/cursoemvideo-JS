function contar() {        
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let res = document.querySelector('div#contagem')      

    if (inicio === '' || fim === '' || passo === '') {
    //if (inicio.length == 0 || fim.length == 0 || passo.length == 0) { //mesma coisa escrito diferente
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0) {
            window.alert('Passo INVALIDO! Considerando passo 1')
            p = 1
        }

        if (i > f) {
            //contagem decrescente
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        } else {
            //contagem crescente
            for (c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        }
    }
}

