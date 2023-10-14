function verificar() {
    var pegaAno = new Date()
    var anoAtual = pegaAno.getFullYear()
    var anoRecebido = document.getElementById('yaer')
    var img = document.getElementById('imagem')
    if (anoRecebido.value.length == 0 || anoRecebido.value > anoAtual) {
        alert('[ERRO]')
    } else {
        var gender = document.getElementsByName('gender')
        var calculaIdade = anoAtual - anoRecebido.value
        var manOrwoman = ''
        var imgPerson = document.createElement('img')
        imgPerson.setAttribute('id', 'foto')
        if (gender[0].checked) {
            manOrwoman = 'Homem'
            imgPerson.setAttribute('src', 'bebe-homem.png')
        } else {
            manOrwoman = 'Mulher'
        }

        img.style.textAlign = 'center'
        img.innerHTML = `Detectamos ${manOrwoman} com idade de ${calculaIdade} anos`
        img.appendChild(imgPerson)
    }
}