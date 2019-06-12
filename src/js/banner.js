$(function(){
    let oSlider = $(".slider");
    let oBox = $(".slider_box");
    let timer;
    let index = 1;
    let defineLeft = 200;
    let wdnWidth = $(window).width()
    let imgwidth = oSlider.children("p").width();
    oSlider.append(oSlider.children("p").first().clone(true))
    let length = oSlider.children("p").length;
   
   
    $(".banner").hover(function(){
        $(".t").stop(true).fadeIn(500);
        clearInterval(timer);
    },function(){
        $(".t").stop(true).fadeOut(500);
        star_next();
    });
    $(".prev").click(function(){
        prev();
    })
    $(".next").click(function(){
        next();
    })
    function star_next(){
        timer = setInterval(function(){
            next()
        },4000)
    }
    function next(){
        index++;
        if(index >= length){
            index = 1;
            oSlider.css({"left":-200 + "px"})
        }
        oSlider.stop(true).animate({
            "left":-(index*imgwidth +200) + "px"
        });
    }
    function prev(){
        index--;
        if(index < 0){
            oSlider.css({"left":-((length-1)*imgwidth) + "px"})
            index = length - 2;
        }
        oSlider.stop(true).animate({
            "left":-(index*imgwidth +200) + "px"
        })
    }

})