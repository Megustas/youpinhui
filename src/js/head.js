$(function () {

    // 设置顶部公告翻滚效果
    // let lires = $(".show_notice > li");
    // let liheight = lires.height();
    // let timer;
    // let index = 0;
    // lires.first().clone(true).appendTo($(".show_notice"));
   
    // star_notice();

    // function star_notice() {
    //     timer = setInterval(function () {
    //         index++;
    //         if (index > lires.length) {
    //             index = 1;
    //             $(".show_notice").css("margin-top", 0)
    //         }
    //         let noticeTop = index * liheight;
    //         $(".show_notice").animate({
    //             "margin-top": -noticeTop + "px",
    //         })
    //     }, 2000);
    // }
    // lires.hover(() => clearInterval(timer), star_notice);



    // ------------------------------------------------------//

    // 点击分类进行跳转
    
    //     let liArr = [];
    //     $(".channel").each(function(i){liArr.push(i);});
    //     $(".nav-ul").on("click",".channel",function(){
    //         // $(this).addClass("add").siblings(".channel").removeClass("add");
    //         // window.location.href = "../html/list.html";
    //         let xxIndex = $(this).index();
    //         let de = JSON.stringify(liArr);
    //         // window.location.href = "../html/list.html";
    //         $.get({
    //             url:"../api/details.php",
    //             data:{name:xxIndex,arr:de},
    //                 success(index){
    //                     $(".nav-ul").eq(index).css("background","#bc0600")  
    //                     console.log(index); 
    //                 }
    //         })
    //  })
       

    // 二维码下载app
    // $(".phone").hover(() => {
    //     $(".down_app").css("display", "block");
    // }, () => {
    //     $(".down_app").css("display", "none")
    // });


    // 头部分类菜单
    let kind    = $(".kindbot");
    let listarr ;
    $.get({
        url:"../api/kindbot.php",
        success(data){
            // kind.each(function(i,one){
            //     let oo = this
                kind.each(function(i,one){
                    // let gg = two.content.split(",");
                   //  JSON.parse(jsonstr)
                //     let ggg = gg.map(function(three,i){
                //        return `<a href="">${three}</a>`
                //    });
               let resarr = []
               let gg = (data[i]["ctt"]).split(",");    
                    let tt = gg.map(function(ele){        
                        return `<a href="">${ele}</a>`
                    }).join("");
                //   console.log(one); 

                // 获取的类型为标签，记得加 $ 符号，不然会出现问题
                $(one).append(tt)
                  });    
        }
    })
    $(".navclass").hover(function(){
        $(".dlnav > .cate").css({
            "display":"block",
        })
    },function(){$(".dlnav > .cate").css({
        "display":"none",
    })
})
})