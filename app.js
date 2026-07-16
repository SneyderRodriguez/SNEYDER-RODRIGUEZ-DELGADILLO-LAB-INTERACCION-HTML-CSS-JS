let contador = 0;

const puntaje = document.getElementById("puntaje");
const btnIncremento = document.getElementById("btnIncremento");
const btnDecremento = document.getElementById("btnDecremento");

btnIncremento.addEventListener("click", function(){
    contador++;
    puntaje.textContent = contador;

    switch (contador){
        case 10:
            puntaje.classList.add("color-limite");
            break;
        case 20:
            puntaje.classList.add("color-limite");
            break;
        case 30:
            puntaje.classList.add("color-limite");
            break;
        case 40:
            puntaje.classList.add("color-limite");
            break;
        case -10:
            puntaje.classList.add("color-limite");
            break;
        case -20:
            puntaje.classList.add("color-limite");
            break;
        case -30:
            puntaje.classList.add("color-limite");
            break;
        case -40:
            puntaje.classList.add("color-limite");
            break;
        default:
            puntaje.classList.remove("color-limite");
            break;
    }
})
btnDecremento.addEventListener("click", function(){
    contador--;
    puntaje.textContent = contador;

    switch (contador){
        case 10:
            puntaje.classList.add("color-limite");
            break;
        case 20:
            puntaje.classList.add("color-limite");
            break;
        case 30:
            puntaje.classList.add("color-limite");
            break;
        case 40:
            puntaje.classList.add("color-limite");
            break;
        case -10:
            puntaje.classList.add("color-limite");
            break;
        case -20:
            puntaje.classList.add("color-limite");
            break;
        case -30:
            puntaje.classList.add("color-limite");
            break;
        case -40:
            puntaje.classList.add("color-limite");
            break;
        default:
            puntaje.classList.remove("color-limite");
            break;
    }
})