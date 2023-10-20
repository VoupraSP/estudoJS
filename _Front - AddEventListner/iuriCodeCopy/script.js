let items = Array.from(document.getElementsByClassName('item'))
let digitalHouse = document.getElementById('digitalHouse')
let zuplae = document.getElementById('zuplae')
let contweb = document.getElementById('contweb')
let codigofontetv = document.getElementById('codigofontetv')

hideOrShowText('dgHouse')

items.forEach(item =>{
    item.addEventListener('click', getData);
})

function getData(event) {
    let getAtribute = event.target.getAttribute('data')
    addOrRemoveActive(getAtribute)
    hideOrShowText(getAtribute)
}

function addOrRemoveActive(getAtribute) {
    items.forEach(item =>{
        let itemAtribute = item.getAttribute('data')
        if (itemAtribute === getAtribute) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}

function hideText() {
    digitalHouse.style.display = 'none'
    zuplae.style.display = 'none'
    contweb.style.display = 'none'
    codigofontetv.style.display = 'none'
}

function hideOrShowText(getAtribute) {
    hideText()
    if (getAtribute === 'dgHouse') {
        digitalHouse.style.display = 'block'
    }
    if (getAtribute === 'zuplae') {
        zuplae.style.display = 'block'
    }    
    if (getAtribute === 'contWeb') {
        contweb.style.display = 'block'
    }
    if (getAtribute === 'codFont') {
        codigofontetv.style.display = 'block'
    }    
}