let btn = document.getElementById('btn');
let result = document.getElementById('result');

function estiloBtn() {
    btn.innerText = 'ENVIAR'
    btn.style.color = '#2F96F0'
    btn.style.background = '#fff'
    btn.style.border = '3px solid #2F96F0'
    btn.style.transition = '0.3s ease-in-out'
}
function estiloBtnOut() {
    btn.style.color= 'snow'
    btn.style.background= '#2F96F0'
    btn.style.border= 'none'
    btn.style.transition= '0.5s ease-in-out'
}
function calcular() {
    let cont = 0;
    let start = document.getElementById('inicio');
    let end = document.getElementById('end');
    let jump = document.getElementById('jump');

    while(cont < Number(start.value)) {
        result.innerHTML = `${cont} ->`
        cont = cont + Number(jump.value);
    }
}
