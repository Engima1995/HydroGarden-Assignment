let state = 0;

$( ".icon" ).click(function() {
    
    if(state == 1) {
        console.log('1. state: ' + state);
        $("nav a").css("display", "block").fadeIn("slow");
        state = 0;
    }else {
        $("nav a").css("display", "none").fadeOut("slow");
        state = 1;
    }
    
});


