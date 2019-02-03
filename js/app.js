$(document).ready(function() {

    var tema = $("#theme");

    document.getElementById('verde').addEventListener('click', function() {
        tema.attr("href", "estilo1.css");
    })

    document.getElementById('rojo').addEventListener('click', function() {
        tema.attr("href", "estilos2.css");
    })

    document.getElementById('azul').addEventListener('click', function() {
        tema.attr("href", "estilosOriginales.css");
    })

    document.getElementById('nocturno').addEventListener('click', function() {
        tema.attr("href", "estilo3.css");
    })

});