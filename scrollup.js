const d = document;
const w = window;

export function scrollUp (boton){
const $boton = d.querySelector(boton)

w.addEventListener('scroll',(e)=>{
    const scroll = w.pageYOffset || d.documentElement.scrollTop
    if(scroll > 600){
        $boton.classList.remove('hidden')
    } else {
        $boton.classList.add('hidden')
    }
})

d.addEventListener('click',(e)=>{
    if(e.target.matches(`${boton} *`) || e.target.matches(boton)){
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }
})

}