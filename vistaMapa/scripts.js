$(document).ready(function () {
    movimientoMario();    
});

function movimientoMario(){
    
    var juego= [true, true, true, true, true];

    if(juego[0] == false){
        $("#mario").css({top: "22%"});
        $("#mario").animate({top: "10%"}, 2600);
        $("#mario").animate({left: "20%"}, 2100);
    }else if(juego[0] == true && juego[1] == false){
        $("#mario").css({left: "20%"});
        $("#mario").animate({top: "50%",}, 2100);
    }else if(juego[0] == true &&juego[1] == true && juego[2] == false){
        $("#mario").css({top: "50%", left: "20%"});
        $("#mario").animate({left: "50%",}, 2100);
    }else if(juego[0] == true &&juego[1] == true && juego[2] == true && juego[3] == false){
        $("#mario").css({top: "50%", left: "50%"});
        setTimeout(function (){window.location.replace("../apuesta/index.html")}, 5300);
        $("#mario").animate({top: "10%",}, 2100);
    }else if(juego[0] == true &&juego[1] == true && juego[2] == true && juego[3] == true&& juego[4]==false){
        $("#mario").css({top: "10%", left: "50%"});
        $("#mario").animate({left: "70%",}, 2100);
    }else if(juego[0] == true &&juego[1] == true && juego[2] == true && juego[3] == true && juego[4]==true){
        $("#mario").css({top: "10%", left: "70%"});
        $("#mario").animate({left: "85%",}, 3100);
    }
}