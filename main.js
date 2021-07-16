$(document).ready( function() {
    $('a[href*="#"]').on("click", function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:$($(this).attr('href')).offset().top }, 2500, 'linear');
    });
})