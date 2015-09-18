// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    /*if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("navbar-custom");
        $(".navbar-header").addClass("navbar-header-alt");
        $(".navbar-brand").removeClass("navbar-logo-box");
    } else {
        $(".navbar-fixed-top").removeClass("navbar-custom");
        $(".navbar-header").removeClass("navbar-header-alt");
        $(".navbar-brand").addClass("navbar-logo-box");
    }*/
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $(".navbar").height()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.round-icon').hover(function () {
       $(this).addClass("animated bounceIn")
       console.log("hereee");
    });

     $('.round-icon').mouseout(function () {
       $(this).removeClass("bounceIn");
       console.log("there");
    });

    var qd = {};
    location.search.substr(1).split("&").forEach(function(item) {var s = item.split("="), k = s[0], v = s[1] && decodeURIComponent(s[1]); (k in qd) ? qd[k].push(v) : qd[k] = [v]});

    if(qd.feedback && qd.feedback[0] == 'success') {
        $('#contactResponse').slideDown(300);

        setTimeout(function () {
            $('#contactResponse').slideUp(300);
        }, 5000);
    }
});


