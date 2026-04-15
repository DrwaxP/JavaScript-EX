/*
let p1 = window.document.getElementsByTagName('p')[0]
window.document.write('Esta escrito:' + p1.innerText )
alert('Esta escrito:' + p1.innerText )


let corpo = document.body
corpo.style.background = 'aqua'

let classe = document.querySelector('div.container')
classe.style.background = 'black'
classe.style.color = 'white'


let corpo = document.body
corpo.style.background = 'black'
corpo.style.color = 'white'

let ask = prompt('O que e DOM?')

function conf() {
    let dom = 'Document Object Model'
        if(ask === dom) {
            alert('Correto')
            let p1 = window.document.getElementsByTagName('p')[1]
            p1.style.background = 'white'
            p1.style.color = 'black'
        } else {
            alert('Errado')
        }
}

conf();

*/




let btn = document.getElementById('search')
btn.addEventListener('mouseenter', () => {
    btn.innerText= 'Buscar'
    btn.style.color= 'white'
    btn.style.background= 'black'
    btn.style.border='3px solid white'
    btn.style.transition= '0.3s ease-in-out'
});

btn.addEventListener('mouseout', () => {
    btn.style.color= 'black'
    btn.style.background= 'white'
    btn.style.border= '2px solid black'
    btn.style.transition= '0.5s ease-in-out'
})





let nvg = document.querySelectorAll('[id^="link"]')
nvg.forEach(nvg => {
        nvg.addEventListener('mouseenter', () => {
            nvg.style.border= '2px solid white'
            nvg.style.transition= '0.5s ease-in-out'
         })

         nvg.addEventListener('mouseout', () => {
            nvg.style.border= 'none'
        })


})




















