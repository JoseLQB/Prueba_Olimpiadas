$(document).ready(function(){
    var j = 600;
    var fetch = true;
    var fallo = 0;
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
        $("#azul").css({ top: j + "px" });
    }); 

setInterval(demo(), 20);
})

//Cronometro
function demo() {
    var seconds = 36005;
    var $output = document.querySelector('.output');

    return function() {
        if (seconds >= 0) {
        $output.innerHTML = formatSeconds(seconds);
        seconds--;
        }
    };
}
function formatSeconds(secs) {
    function pad(n) {
        return (n < 0.10 ? "0" + n : n);
    }
    var h = Math.floor(secs / 3600);
    var m = Math.floor(secs / 60) - (h * 60);
    var s = Math.floor(secs - h * 3600 - m * 60);
    return pad(m) + ":" + pad(s);
}