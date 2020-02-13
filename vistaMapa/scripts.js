$(document).ready(function () {
    movimientoMario();    
});

function movimientoMario(){
    var juego1 = false;
    var juego2 = false;
    var juego3 = false;
    var juego4 = false;
    var juego5 = false;

    if(juego1 == false){
        $("#mario").css({top: "22%"});
        $("#mario").animate({top: "10%"}, 2600);
        $("#mario").animate({left: "20%"}, 2100);
    }else if(juego1 == true && juego2 == false){
        $("#mario").css({left: "20%"});
        $("#mario").animate({top: "50%",}, 2100);
    }else if(juego1 == true &&juego2 == true && juego3 == false){
        $("#mario").css({top: "50%", left: "20%"});
        $("#mario").animate({left: "50%",}, 2100);
    }else if(juego1 == true &&juego2 == true && juego3 == true && juego4 == false){
        $("#mario").css({top: "50%", left: "50%"});
        setTimeout(function (){window.location.replace("../apuesta/index.html")}, 5300);
        $("#mario").animate({top: "10%",}, 2100);
    }else if(juego1 == true &&juego2 == true && juego3 == true && juego4 == true&& juego5==false){
        $("#mario").css({top: "10%", left: "50%"});
        $("#mario").animate({left: "70%",}, 2100);
    }else if(juego1 == true &&juego2 == true && juego3 == true && juego4 == true && juego5==true){
        $("#mario").css({top: "10%", left: "70%"});
        $("#mario").animate({left: "85%",}, 2100);
    }
}