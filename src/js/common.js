(function ($) {

    $.extend({
       getprev(width,left,tv_day_li_length,name){
            if(left == 0 ){
                left  = -(tv_day_li_length - 1) * width;
                width = 0;
            }
            name.stop().animate({"left":(left + width) + "px"})
        },
        getnext(width,left,tv_day_li_length,name){
            if(-left >= (width * (tv_day_li_length-1))){
                left = 0;
                width= 0;
            }
            name.stop().animate({"left":(left - width) + "px"})
        }
    })
  })(jQuery)
