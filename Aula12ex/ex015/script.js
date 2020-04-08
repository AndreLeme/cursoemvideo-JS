function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // mesma coisa de ir no html e fazer <img id='foto'>
        if (fsex[1].checked) {
            genero = 'Mulher'           
            if (idade < 13) {
                //criança
                img.setAttribute('src', 'foto-menina.jpg')            
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-garota.jpg')
            } else if (idade < 60) {
                //adulta
                img.setAttribute('src', 'foto-adulta.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'foto-idosa.jpg')
            }           
        } else {
            genero = 'Homem'            
            if (idade < 13) {
                //criança
                img.setAttribute('src', 'foto-menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-garoto.jpg')
            } else if (idade < 60) {
                //adulta
                img.setAttribute('src', 'foto-adulto.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'foto-idoso.jpg')
            }
            
        }

        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}