$(function () {
    $(".gototop").click(function () {
        $("body,html").animate({
            "scrollTop": "0px"
        })
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            $(".gototop").fadeIn();
        } else {
            $(".gototop").fadeOut();
        }
    });
});

if ($("body#index").length > 0) {



    var slideindex = 1;
    showslide(slideindex);
    var btnclick = document.querySelector(".right .prev").onclick = function () {
        var n = -1;
        showslide(slideindex += n);
    };
    var btnclick = document.querySelector(".right .next").onclick = function () {
        var n = 1;
        showslide(slideindex += n);
    };


    function showslide(n) {
        var i;
        var slide = document.getElementsByClassName("serviceslides");
        if (n > slide.length) {
            slideindex = 1
        }
        if (n < 1) {
            slideindex = slide.length;
        }
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";
        }
        slide[slideindex - 1].style.display = "flex";
    }
}


if ($("body#about").length > 0) {



    var slideindex = 1;
    showslide(slideindex);
    var btnclick = document.querySelector(".right .prev").onclick = function () {
        var n = -1;
        showslide(slideindex += n);
    };
    var btnclick = document.querySelector(".right .next").onclick = function () {
        var n = 1;
        showslide(slideindex += n);
    };


    function showslide(n) {
        var i;
        var slide = document.getElementsByClassName("slider");
        if (n > slide.length) {
            slideindex = 1
        }
        if (n < 1) {
            slideindex = slide.length;
        }
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";
        }
        slide[slideindex - 1].style.display = "flex";
    }
}


if ($("body#projectpage").length > 0) {


    $(".nav li a").click(function (e) {
        e.preventDefault();
        var index = $(this).parent("li").index();
        $(".nav li a").removeClass("active");
        $(this).addClass("active");
        $(".box").css({
            "display": "none"
        });
        $(".box:eq(" + index + ")").removeClass("d-none")
        $(".box:eq(" + index + ")").fadeIn(100);
    });
    
}

if ($("body#serv2").length > 0) {


    $("aside ul li a").click(function (e) {
        e.preventDefault();
        var index = $(this).parent("li").index();
        $("aside ul li a").removeClass("active");
        $(this).addClass("active");
        $(".servicedesslider").css({
            "display": "none"
        });
        $(".servicedesslider:eq(" + index + ")").removeClass("d-none")
        $(".servicedesslider:eq(" + index + ")").fadeIn(100);
        $("html,body").animate({
            "scrollTop":670
        })
    });
}





if ($("body#proj2").length > 0) {


}


if ($("body#news2").length > 0) {
}