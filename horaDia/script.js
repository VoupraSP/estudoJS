function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var horaExata = agora.getHours()
    msg.innerHTML = `Agora são ${horaExata} horas`
    
    if (horaExata >= 0 && horaExata < 12) {
        img.style.background = 'yellow'
        document.body.style.background = 'yellow'
    } else if (horaExata >= 12 && horaExata < 18) {
        img.style.background = 'red'
        document.body.style.background = 'red'
    } else {
        img.style.background = 'black'
        document.body.style.background = 'black'
    }
}
