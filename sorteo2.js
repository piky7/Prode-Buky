const d = document;

export function sorteo2 (btn,selector,listaWin){
    let arr = []
    const $participantes = d.querySelectorAll(selector)
    const $btn = d.querySelector(btn)
    
    for (let i = 0; i < $participantes.length; i++) {
        arr.push($participantes[i])
    }
    console.log(arr)

const $listaWin = d.getElementById(listaWin)
const sortear = () =>{
    
      if(arr.length >= 1){
          let azar = Math.floor(Math.random()*arr.length)
          let ganador = arr[azar]
          $listaWin.innerHTML += `<figure class="logo">${ganador.innerHTML}</figure>`
          arr.splice(azar,1)
          console.log(arr)
          return `El participante sorteado es: ${ganador.outerText}`
      } else {
          $btn.disabled = true;
           return 'No quedan mas participantes'
        }
}

d.addEventListener('click',e=>{
    if(e.target.matches(btn)){
      let resultado = sortear(selector);
      alert(resultado)
    }
})



}