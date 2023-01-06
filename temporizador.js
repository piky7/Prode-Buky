const d = document;

export function temporizador (id,fecha,mensaje){
const $espacioTemp = d.getElementById(id);
const inicioProde = new Date(fecha).getTime();

let intervalo = setInterval(()=>{
    let ahora = new Date().getTime()
    let diferencia = inicioProde - ahora;

    let dias = Math.floor(diferencia / (1000*60*60*24))
    let horas = Math.floor(diferencia % ((1000*60*60*24)) / (1000*60*60))
    let minutos = Math.floor(diferencia % (1000*60*60) / (1000*60))
    let segundos = Math.floor(diferencia % (1000*60) / 1000)

    $espacioTemp.innerHTML = `<h4>Faltan ${dias} dias ${horas} horas ${minutos} minutos y ${segundos} segundos para una nueva edicion del Prode Buky</h4>`
    if(ahora === diferencia) {
        $espacioTemp.innerHTML = `<h3>${mensaje}</h3>`
    }
},1000)

}