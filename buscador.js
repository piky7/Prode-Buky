const d = document;

export function buscar (input,selector) {
    d.addEventListener('keyup',(e)=>{
      
        if(e.target.matches(input)){
            d.querySelectorAll(selector).forEach(el=>{
               if(el.textContent.toLowerCase().includes(e.target.value) ||  el.textContent.toUpperCase().includes(e.target.value) ||  el.textContent.includes(e.target.value)){
                   el.classList.remove('ocultar')
               } else {
                   el.classList.add('ocultar')
               }
            }) 
            
        }
    })
}

export function historialLogo(imagen){
    d.addEventListener('click',(e)=>{
        if(e.target.matches(imagen)){
            if(e.target.alt === 'Aldo') alert('Ganó 2 Prode buky')
            if(e.target.alt === 'Fran'||e.target.alt ==='Adriana')alert('Ganó 1 Prode buky')
            if(e.target.alt === 'Faus'||e.target.alt ==='Horacio')alert('Ganó 1 Prode buky y 1 Cata Cup')
            if(e.target.alt === 'Fer') alert('Ganó 1 Copa Birrera y 1 Cata Cup')
            if(e.target.alt !=='Aldo' && e.target.alt !=='Fran' && e.target.alt !=='Faus' && e.target.alt !=='Adriana' && e.target.alt !=='Horacio'&& e.target.alt !=='Fer')alert('No ganó nada')
        }
    })
}