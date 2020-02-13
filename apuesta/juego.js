$(document).ready(function(){ 
    resultadosPrincipal();
    congela_gif("corredor1");
    congela_gif("corredor2");
    congela_gif("corredor3");
    $("#botonApuesta").click(function(){
        $("#formu").hide();
        pressStart();
        $(".button").click(function(){
            juegoPrincipal();
            descongela_gif("#corredor1", "corredor1.gif");
            descongela_gif("#corredor2", "corredor2.gif");
            descongela_gif("#corredor3", "corredor3.gif");

        });
    });
});
//Crea el Resultados inicial
function resultadosPrincipal(){
    var divResultados = $("<div>");
    divResultados.attr("id", "formu");
    $("#carrera").append(divResultados);
    $("#formu").append("<h3>Apuesta por un ganador</h3>");
    var Resultados = $("<form>");
    Resultados.attr("action", "#");
    Resultados.attr("method", "post");
    $("#formu").append(Resultados);
    $("form").append("<input type='radio' name='apuesta' value='jugador1' required>Jugador 1 <br>");
    $("form").append("<input type='radio' name='apuesta' value='jugador2' required>Jugador 2 <br>");
    $("form").append("<input type='radio' name='apuesta' value='jugador3' required>Jugador 3 <br>");
    $("form").append("<input type='button' name='botonApuesta' value='¡APUESTA!' id='botonApuesta'><br>");
}
//Crea el botón start que da inicio a la carrera
function pressStart(){
    var divStart = $("<div>");
    var boton = $("<a>").text("START!");
    divStart.attr("id", "info");
    boton.attr("class", "button");
    boton.attr("href", "#");
    $("section").append(divStart);
    $("#info").append(boton);
}
//Función principal del juego, se iniciará tras completar el Resultados y pulsar START
function juegoPrincipal(){
    //Guarda al jugador por el que se ha apostado en una variable
    var elegido = $('input[name="apuesta"]:checked').val();
    //Sector 1
    $(".button").hide();
    var vAzul = velocidad(3,7)*1000;
    var vRojo = velocidad(3,7)*1000;
    var vVerde = velocidad(3,7)*1000;
    $("#azul").animate({left: "150",}, vAzul);
    $("#rojo").animate({left: "150",},vRojo);
    $("#verde").animate({left: "150",},vVerde);
    //Sector 2
    var vAzul2 = velocidad(2,4)*1000;
    var vRojo2 = velocidad(2,4)*1000;
    var vVerde2 = velocidad(2,4)*1000;
    $("#azul").animate({left: "500",}, vAzul2);
    $("#rojo").animate({left: "500",},vRojo2);
    $("#verde").animate({left: "500",},vVerde2);
    //Sector 3
    var vAzul3 = velocidad(2, 3)*1000;
    var vRojo3 = velocidad(2, 3)*1000;
    var vVerde3 = velocidad(2, 3)*1000;
    $("#azul").animate({left: "1200",}, vAzul3);
    $("#rojo").animate({left: "1200",},vRojo3);
    $("#verde").animate({left: "1200",},vVerde3);
    //Movimiento de escenario
    $('#carrera').animate({
        'background-position-x': '100%'
    }, 10000, 'linear');
    var resultAzul = vAzul + vAzul2 + vAzul3;
    var resultRojo = vRojo + vRojo2 + vRojo3;
    var resultVerde = vVerde + vVerde2 + vVerde3;
    if(resultAzul<resultRojo && resultAzul<resultVerde){
        var ganador = "jugador1";
    }else if(resultRojo<resultVerde && resultRojo<resultAzul){
        var ganador = "jugador2";
    }else{
        var ganador = "jugador3";
    }
    //Al terminar la carrera se mostrará si se ha ganado
    setTimeout(function(){ resultados(elegido, ganador);
    congela_gif("corredor1");
    congela_gif("corredor2");
    congela_gif("corredor3");
    var puntuacion = 100/// Será la puntuación que se envía a la BBDD

    }, 11000);
    setTimeout(function (){window.location.replace("../vistaMapa/selectGame.html")}, 14000);
}
//Velocidad de los corredores
function velocidad(a,b) {
    return Math.random()*(b-a)+parseInt(a);
}
//Podio final
function resultados(select, winner){
    var divResultados = $("<div>");
    divResultados.attr("id", "result");
    $("#carrera").append(divResultados);
    $("#result").append("<h3>Estos son los resultados</h3><hr>");
    var resultados = $("<p>").text("Apostaste por " + select);
    $("#result").append(resultados);
    var resultados2 = $("<p>").text("Y ha ganado " + winner);
    $("#result").append(resultados2);
    if(select == winner){
        var resultados3 = $("<p>").text("Felicidades, has ganado 100 puntos");
        $("#result").append(resultados3);    
    }else{
        var resultados3 = $("<p>").text("Mala suerte, has perdido tu apuesta");
        $("#result").append(resultados3);  
        youWin = false; 
    }
    var sonic = $("<img id='sonic' src='images/sonic.gif'>");
    $("#carrera").append(sonic);


}
//Desactiva el gif
function congela_gif(src) {
    i = document.getElementById(src);
    var c = document.createElement('canvas');
    var w = c.width = i.width;
    var h = c.height = i.height;
    c.getContext('2d').drawImage(i, 0, 0, w, h);
    try {
        i.src = c.toDataURL("./images");
    } catch(e) { 
        for (var j = 0, a; a = i.attributes[j]; j++)
            c.setAttribute(a.name, a.value);
            i.parentNode.replaceChild(c, i);
    }
}
//Activa el gif
function descongela_gif(src, corr) {
    $(src).attr("src", "images/" + corr);
}
