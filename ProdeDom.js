const $body = document.body
const $html = document.documentElement
const $titulo = document.getElementById('titulo')
const $titulo2 = document.getElementById('titulo2')
const negro = getComputedStyle($html).getPropertyValue('--negro')
const naranja = getComputedStyle($html).getPropertyValue('--naranja')
const amarillo = getComputedStyle($html).getPropertyValue('--amarillo')
const $campeones = document.querySelector('.campeones')
const $campeonesCata = document.querySelector('.cataCup')
const $cataTitulo = document.getElementById('cata')
const $birreraTitulo = document.getElementById('birrera')
const $campeonesBirrera = document.querySelector('.copabirrera')
const $logo = document.querySelector('img')
const $botonAdriana = document.getElementById('adrianap')
const $botonHoracio = document.getElementById('horaciop')
const $botonAldo = document.getElementById('aldop')
const $botonAldo2 = document.getElementById('aldop2')
const $botonFaustino = document.getElementById('faustinop')
const $botonFernandoCP = document.getElementById('ferCP')
const $botonHoracioCP = document.getElementById('horacioCP')
const $botonFaustinoCP = document.getElementById('faustinoCP')
const $botonFerCB = document.getElementById('ferCB')
const $botonMenu = document.querySelector('.panel-btn')
const $menuLink = document.querySelectorAll('.menu a')

const $panel = document.querySelector('.panel')

document.addEventListener('click',(e)=>{
    if(e.target.matches('.panel-btn')|| e.target.matches('.panel-btn *')){
        $panel.classList.toggle('mostrar')
        $botonMenu.classList.toggle('is-active')
    }
    if(e.target.matches('.menu a')){
        $panel.classList.remove('mostrar')
        $botonMenu.classList.remove('is-active')
    }
    if(e.target == $botonAdriana){alert(`Adriana ganó el prode con 101 pts en 176 partidos prosticados, con un promedio de 0,573 pts por partido`)} 
    if(e.target == $botonHoracio){alert(`Horacio ganó el prode con 27 pts en 28 partidos prosticados, con un promedio de 0,964 pts por partido`)}
    if(e.target == $botonAldo){alert(`Aldo ganó el prode con 208 pts en 325 partidos prosticados, con un promedio de 0,640 pts por partido`)}
    if(e.target == $botonAldo2){alert(`Aldo ganó el prode con 164 pts en 203 partidos prosticados, con un promedio de 0,807 pts por partido`)}
    if(e.target == $botonFaustino){alert(`Faustino ganó el prode con 279 pts en 378 partidos prosticados, con un promedio de 0,738 pts por partido`)}
    if(e.target == $botonFernandoCP){alert('Fernando Petrillo le ganó la final de la Cata Cup a Horacio M')}
    if(e.target == $botonHoracioCP){alert('Horacio M le ganó la final de la Cata Cup a Aldo Y')}
    if(e.target == $botonFaustinoCP){alert('Faustino M le ganó la final de la Cata Cup a Agustin M')}
    if(e.target == $botonFerCB){alert('Fer P le gano la final de la Copa Birrera a Adriana T')}
}
)


