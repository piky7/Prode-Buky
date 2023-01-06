
import { temporizador } from "./temporizador.js";
import { scrollUp } from "./scrollup.js";
import { buscar, historialLogo } from "./buscador.js";
import { sorteo2 } from "./sorteo2.js";
import { carrusel } from "./carruselProde.js";

const d = document;

d.addEventListener('DOMContentLoaded',(e)=>{
    temporizador('espacio', 'Jan 27,2023', 'Comienza el Prode Buky')
    scrollUp('.btn-scroll')
    buscar('.buscador','.logo')
    historialLogo('.logo img')
    sorteo2('#sorteo-btn','.logo','ganadores')
    carrusel()
})

