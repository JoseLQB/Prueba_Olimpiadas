$(document).ready(function(){
    levanta();

    //Movimiento de escenario
    $('body').animate({
        'background-position-x': '100%'
    }, 10000, 'linear');

})



//Levantamiento de pesas pulsando <- y ->
function levanta(){var j = 600;
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
        console.log(fallo);
        $("#pesas").css({ top: j + "px" });  
        //Para el crono cuando la pesa llega arriba 
        if(j == 500){
            clearInterval(crono);


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



//Cronometro
function demo() {
    var seconds = 36005;
    var $output = document.querySelector('.output');

    return function() {
        if (seconds >= 0) {
            var inner = formatSeconds(seconds);
            $output.innerHTML = inner;
            seconds--;
        }
    }
}

function saveScore(seconds){
    var final = seconds;
    return final;

}

function formatSeconds(secs) {
    function pad(n) {
        return (n < 0.10 ? "0" + n : n);
    }
    var h = Math.floor(secs / 3600);
    var m = Math.floor(secs / 60) - (h * 60);
    var s = Math.floor(secs - h * 3600 - m * 60);
    var temp = pad(m) + ":" + pad(s);
    return temp;
}







