$(function(){
    let lires = $(".show_notice > li");
    let liheight = lires.height();
    let timer;
    let index = 0;
    lires.first().clone(true).appendTo($(".show_notice"));
   
    star_notice();

    function star_notice() {
        timer = setInterval(function () {
            index++;
            if (index > lires.length) {
                index = 1;
                $(".show_notice").css("margin-top", 0)
            }
            let noticeTop = index * liheight;
            $(".show_notice").animate({
                "margin-top": -noticeTop + "px",
            })
        }, 2000);
    }
    lires.hover(() => clearInterval(timer), star_notice);



    // ------------------------------------------------------//

    
       

    // 二维码下载app
    $(".phone").hover(() => {
        $(".down_app").css("display", "block");
    }, () => {
        $(".down_app").css("display", "none")
    });
})
    
