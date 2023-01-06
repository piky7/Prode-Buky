const d= document;

export function carrusel (){
    const $botonSig = d.querySelector('.sig')
    const $botonAnt = d.querySelector('.ant')
    const $campeones = d.querySelectorAll('.campeon')
    const $SigCata = d.querySelector('.sigC')
    const $AntCata = d.querySelector('.antC')
    const $campeonesC = d.querySelectorAll('.campeoncata')

    let i = 0

    d.addEventListener('click',e=>{
        if(e.target === $botonAnt){
            e.preventDefault()
            $campeones[i].classList.remove('active')
            i--;
            if(i<0){
                i = $campeones.length-1
            }
            $campeones[i].classList.add('active')
        }

        if(e.target === $botonSig){
            e.preventDefault()
            $campeones[i].classList.remove('active')
            i++;
            if(i>= $campeones.length){
                i = 0
            }
            $campeones[i].classList.add('active')
        }

        if(e.target === $AntCata){
            e.preventDefault()
            $campeonesC[i].classList.remove('active')
            i--;
            if(i<0){
                i = $campeonesC.length-1
            }
            $campeonesC[i].classList.add('active')
        }

        if(e.target === $SigCata){
            e.preventDefault()
            $campeonesC[i].classList.remove('active')
            i++;
            if(i>=$campeonesC.length-1){
                i = 0
            }
            $campeonesC[i].classList.add('active')
        }
    })
}

