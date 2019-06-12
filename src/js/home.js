$(function () {
    // 请求直播商品
    let tv_icon = ["../css/img/ia_10422.png",
        "../css/img/ia_10423.png",
        "../css/img/ia_10426.png"
    ];
    $.get({
        url: "../api/commodity.php",
        data: {
            name: "tv_live"
        },
        success(list) {
            list.forEach(function (ele, i) {
                time(ele.time, i)
                let p = `<div class="tv_live_cc">
                <div class="tv_live_img_box">
                    <i class="live_ing">TV直播中</i>
                    <img src=${tv_icon[i]} class="tv_logo">
                    <a href=""><img src="${ele.src}"></a>
                    <div class="livetime-back" ></div>
                </div>
                <a href="">
                    <p class="tv_live_box_tit clearfix"><em class="img_tit">${ele.box_tit}</em></p>
                    <div class="tv_live_box_yen">
                        <span class="fl tv_live_box_price"><i>¥</i>${ele.price}</span>
                    </div>
                </a>
            </div>`
                $(".tv_list").append(p);
            })
        }
    })

    function time(endTime, i) {
        let now = new Date();
        let end = new Date(endTime);
        let result = Math.floor(end - now) / 1000;
        let timer = setInterval(function () {
            if (result > 1) {
                result = result - 1;
                let second = Math.floor(result % 60); // 计算秒 ，取余  
                let minite = Math.floor((result / 60) % 60); //计算分 ，换算有多少分，取余，余出多少秒
                let hour = Math.floor((result / 3600) % 24); //计算小时，换算有多少小时，取余，24小时制除以24，余出多少小时
                let day = Math.floor(result / (3600 * 24)); //计算天 ，换算有多少天
                $(".livetime-back").eq(i).html(hour + ":" + minite + ":" + second);
            } else {
                $(".livetime-back").eq(i).html(00 + ":" + 00 + ":" + 00);
                window.clearInterval(timer); //这里可以添加倒计时结束后需要执行的事件 
            }
        }, 1000);
    }

    // 请求推荐商品
    $.get({
        url: "../api/commodity.php",
        data: {
            name: "tv_day_one"
        },
        success(list) {
            let tv_index = -1;
            list.forEach(function (ele, i) {
            let tv_sp = `<a href="">
            <div class="tv_day_one_cc">
                <div class="tv_day_img_box">
                    <img src="${ele.src}" />
                </div>
                <p class="tv_live_box_tit c_clearfix"><em class="img_tit">${ele.box_tit}</em></p>
                <div class="tv_live_box_yen">
                    <span class="fl tv_live_box_price"><i>¥</i>${ele.new}</span>
                    <em class="line_price"><i>¥</i>${ele.old}</em></div>
                <div class="tv_day_one_yen">
                    <p class=" fr close_tip">马上抢</p>
                </div>
            </div>
        </a>`;     
                if (i % 3 == 0) {tv_index++;$("<li></li>").appendTo(tv_ul);}
                tv_ul.children("li").eq(tv_index).append(tv_sp);              
                if(!ele["old"]){$(".tv_live_box_yen").children(".line_price").eq(i).empty() }
            })
        }
    })
//  切换商品列表
let tv_ul = $(".tv_day_one_list > ul");
$(".tv_day_one").on("click", ".dd", function () {
    let tv_day_ul = Math.floor(tv_ul.position().left);
    let tv_day_li = tv_ul.children("li").width();
    let tv_day_li_length = tv_ul.children("li").length;
    if ($(this).hasClass("d_next")) {
        $.getnext(tv_day_li, tv_day_ul, tv_day_li_length,tv_ul);
    } else {
        $.getprev(tv_day_li, tv_day_ul, tv_day_li_length,tv_ul);
    }
});



})