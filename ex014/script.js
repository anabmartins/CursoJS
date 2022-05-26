function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOMDIA
    img.src = 'foto_dia.png'
    document.body.style.background = '#C39F77'
} else if (hora >= 12 && hora < 18){
    //Boa tarde
    img.src = 'foto_tarde.png'
    document.body.style.background = '#5C301A'
} else {
    //bo noite
    img.src = 'foto_noite.png'
    document.body.style.background = '#1C4153'
    }
}