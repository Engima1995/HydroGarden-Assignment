$(".arrow.container, .about.links").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
});