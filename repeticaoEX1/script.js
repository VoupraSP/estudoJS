function calcular() {
    var first = document.getElementById('txt1')
    var fim = document.getElementById('txt2')
    var steps = document.getElementById('txt3')
    var res = document.getElementById('res')
    
    if (first.value.length == 0 || fim.value.length == 0 || steps.value.length == 0) {
        alert('[ERRO]')
    } else {
        let i = Number(first.value)
        let f = Number(fim.value)
        let s = Number(steps.value)
        
        if (f > i) {
            for(let c = i; c <= f; c += s) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= s) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
    }
    res.innerHTML += `\u{1F3C1}`

   
}
