var mostrarMensaje = function () {
    console.log('Hey, esta es una prueba de onClick!')
};

window.onload = function () {

    var result = document.getElementById('parrafo');

    console.log(result.innerText);
    console.log(result);

}

var cambiarColor = function() {
    console.log('estoy cambiando el color');

    var nodeText= document.getElementById('input-app');
    var color = nodeText.value;

    var nodeBox = document.getElementById('box');
    nodeBox.style.backgroundColor = color;

}