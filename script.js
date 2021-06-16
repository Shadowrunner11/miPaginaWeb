"use strict"
var x=document.getElementById("myAudio");

function animacion(caso){
    var presentacion="Bienvenido a mi página web"
    setInterval(cambiar(presentacion), 1000);
    function cambiar(txt){
        document.getElementById("card").innerHTML=txt;

    }

}
function playAudio(){
    x.play();
}

function navRes() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}




