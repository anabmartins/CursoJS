function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.img')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}