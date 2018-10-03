
function handleMenu(){
    const menu=$('menu'),
          openButton=$('.open-menu'),
          closeButton=$('.close-menu'),
          overlay=$('.overlay');

    openButton.on(
        "click",function(){
            menu.addClass('open');
            overlay.addClass('active');
        }
    );
    closeButton.on(
        "click",function(){
            menu.removeClass('open');
            overlay.removeClass('active');
        }
    );
}

function handleScroll(){
    $(".scroll-down").click(function() {
        $('html,body').animate({
                scrollTop: $("section#main").offset().top},
            'slow');
    });
}


$(document).ready(function(){
    handleMenu();
    handleScroll();
});