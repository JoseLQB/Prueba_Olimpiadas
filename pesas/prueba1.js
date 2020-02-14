$(document).ready(function(){
    levanta();
    //Movimiento de escenario
    $('body').animate({
        'background-position-x': '8080%'
    }, 50000, 'linear');

})
//Levantamiento de pesas pulsando <- y ->
function levanta(){
    var j = 600;
    var fetch = true;
    var fallo = 0;

    var crono=setInterval(demo(), 20);
    
    $(document).bind("keyup", function(event) { 
        
        var key = (event.keyCode ? event.keyCode : event.which); 
        if (key =="37"){
            fetch = false;
        }
        if (key == "39" && fetch == false){
            if(j>0){
                j=j-20;
                fetch = true;
            }
        }else{
            fallo = fallo +1;
            if(fallo == 2){
                j = j + 20;
                fallo = 0;
            }
        }
        ///
        console.log(fallo);
        $("#pesas").css({ top: j + "px" });  
        //Para el crono cuando la pesa llega arriba y guarda el tiempo tardado 
        if(j == 100){
            clearInterval(crono);
            $(document).off("keyup");
            var resultado = $("#output").text();
            if(resultado == "00:00"){
                $(document).off("keyup");
                clearInterval(crono);
                $("#output").text("No has podido levantar la pesa en el tiempo establecido, otra vez será. ") 
            }
            var puntuacion = parseInt(calculaPuntuacion(resultado))
            $("#output").text("Tu puntuación ha sido " +  Math.floor(puntuacion));

        }
        if(j>630){
            $(document).off("keyup");
            clearInterval(crono);
            $("#output").text("No puedes levantar la pesa, otra vez será. ") 
        }
        if(j==550){
            //Estado 1
        }
        if(j==500){
            //Estado 2
        }
        if(j == 450){
            //Estado 3
        }
    }); 
}




//Cronometro -- No tiene en cuenta horas y minutos
function demo() {
    var seconds = 1800;
    var $output = document.querySelector('#output');

    return function() {
        if (seconds >= 0) {
            var inner = formatSeconds(seconds);
            $output.innerHTML = inner;
            seconds--;
        }
    }
}


function formatSeconds(secs) {
    function pad(n) {
        return (n < 0.10 ? "0" + n : n);
    }
    var h = Math.floor(secs / 3600);
    var m = Math.floor(secs / 60) - (h * 60);
    var s = Math.floor(secs - h * 3600 - m * 60);
    if(s<10 && s>0){
        var temp = pad(m) + ":0" + pad(s);
        var puntuacion = pad(m) + "0" +pad(s);
        console.log(puntuacion);
    }else{
        var temp = pad(m) + ":" + pad(s);
        var puntuacion = pad(m) + "" +pad(s);
        console.log(puntuacion);
    }
    return temp;
}

//La puntuación se calcula a partir del tiempo
function calculaPuntuacion(tiempo){
    var puntua = tiempo.split(":");
    var devuelvePuntos = "";
    puntua.forEach(i => {
        devuelvePuntos = devuelvePuntos + i;
    });

    return devuelvePuntos;
}






