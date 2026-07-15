let contador = 0;

const puntaje = document.getElementById("puntaje");
const btnIncremento = document.getElementById("btnIncremento");
const btnDecremento = document.getElementById("btnDecremento");

btnIncremento.addEventListener("click", function(){
    contador++;
    puntaje.textContent = contador;
})
btnDecremento.addEventListener("click", function(){
    contador--;
    puntaje.textContent = contador;
})