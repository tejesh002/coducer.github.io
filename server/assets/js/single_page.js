$(document).ready(function(){
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    var navigationHeight = $("#navigation").outerHeight();

    /*
     *   ON RESIZE, check again
     */
    $(window).resize(function () {
        pageWidth = $(window).width();
        pageHeight = $(window).height();
    });

    /*
     *   ON LOAD
     */

    // Fix navigation.
    $('#navigation').fixedonlater();

    //Initialize scroll so if user droped to other part of page then home page.
    $(window).trigger('scroll');

    //Scroll spy and scroll filter
    $('#main-menu').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollOffset: navigationHeight - 10,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: '',
        easing: 'swing',
    });
    // Paralax initialization.
    // Exclude for mobile.
    if(pageWidth > 980){
        //Dont user paralax for tablet and mobile devices.
        $('#page-welcome').parallax("0%", 0.2);
        $('#page-features').parallax("0%", 0.07);
        $('#page-twitter').parallax("0%", 0.1);
    }

    /*
     *   BLOCK | Navigation
     *
     *   Smooth scroll
     *   Main menu links
     *   Logo click on Welcome page
     */
    $('#page-welcome .logo a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - navigationHeight + 4
            
        }, 800);
        
        //Fix jumping of navigation.
        setTimeout(function() {
            $(window).trigger('scroll');
        }, 900);
        
        return false;
    });


    $(".post-content p").addClass("smallFontBy08");
});
