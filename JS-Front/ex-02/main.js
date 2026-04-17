let hr = new Date()
let hora = hr.getHours()
let min = new Date()
let minuto = min.getMinutes()




function horaDoDia() {
    if(hora >= 1 && hora <= 12) {
        let dia = document.body
        dia.style.background= '#CFCC78'

        let div1 = document.querySelector('.container1');
            div1.innerHTML += `${hora}:${minuto}`

        let container2 = document.querySelector('.container2');
        let imagem = document.createElement('img');
            imagem.src = 'img/dia.jfif'
            imagem.alt = 'O dia'
            imagem.style.margin = '15px'

        container2.appendChild(imagem);
        
    }
    else if(hora >=13 && hora <= 17) {
        let dia = document.body
        dia.style.background= '#CF9F40'

        let div1 = document.querySelector('.container1');
            div1.innerHTML += `${hora}:${minuto}`

        let container2 = document.querySelector('.container2');
        let imagem = document.createElement('img');
            imagem.src = 'img/tarde.jfif'
            imagem.alt = 'Tarde'
            imagem.style.margin = '15px'

        container2.appendChild(imagem);
    }
    else if (hora >= 18 && hora <= 23) {
        let dia = document.body
        dia.style.background= '#33312C'

        let div1 = document.querySelector('.container1');
            div1.innerHTML += `${hora}:${minuto}`

        let container2 = document.querySelector('.container2');
        let imagem = document.createElement('img');
            imagem.src = 'img/noite.jfif'
            imagem.alt = 'Noite estrelada'
            imagem.style.margin = '15px'

        container2.appendChild(imagem);
    }
    
}

horaDoDia();