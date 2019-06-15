$(function () {
    alert("请从列表页跳转过来")
    // 商品渲染
    let loc = location.href;
    let n1 = loc.length;
    let n2 = loc.indexOf("?");
    let id = loc.substr(n2 + 1, n1 - n2);
    let a = id.split("=");
    $.get({
        url: "../api/list.php",
        data: {
            page: a[0]
        },
        success(shoplist) {
            let shoparr = JSON.parse(shoplist);
            $("#addCartImg").attr("src", shoparr[a[1]].src);
            $(".items img").attr("src", shoparr[a[1]].src);
            $(".hhh").html(shoparr[a[1]].list_tit);
            $(".price").text(shoparr[a[1]].price);
            $(".big_r_box img").attr("src", shoparr[a[1]].src);
        }
    })




    // 放大镜开始
    $(".jqzoom").mouseover(function () {
        $(".float_layer").show()
        $(".big_r_box").show()
    })
    $(".jqzoom").mouseout(function () {
        $(".float_layer").hide()
        $(".big_r_box").hide()
    })

    $(".jqzoom").mouseover(function () {
        $(".float_layer").show()
        $(".big_box").show()
    })
    $(".jqzoom").mouseout(function () {
        $(".float_layer").hide()
        $(".big_box").hide()
    })



    $(".jqzoom").mousemove(function (e) {
        var l = e.pageX - $(".jqzoom").offset().left - ($(".float_layer").width() / 2)
        var t = e.pageY - $(".jqzoom").offset().top - ($(".float_layer").height() / 2)
        if (l < 0) {
            l = 0
        }
        if (l > $(this).width() - $(".float_layer").width()) {
            l = $(this).width() - $(".float_layer").width()
        }
        if (t < 0) {
            t = 0
        }
        if (t > $(this).height() - $(".float_layer").height()) {
            t = $(this).height() - $(".float_layer").height()
        }

        $(".float_layer").css({
            "left": l,
            "top": t
        })
        var pX = l / ($(".jqzoom").width() - $(".float_layer").width())
        var pY = t / ($(".jqzoom").height() - $(".float_layer").height())
        $(".big_r_box img").css({
            "left": -pX * ($(".big_r_box img").width() - $(".big_r_box").width()),
            "top": -pY * ($(".big_r_box img").height() - $(".big_r_box").height())
        })
        // 放大镜结束
    })
    // 购物车开始
    let carBtn = $(".carBtn");
    let shopnum = 0;

    carBtn.click(function () {
        let shopSrc = $("#addCartImg").attr("src");
        let shopTitle = $(".title").html();
        shopnum++;
        let carlist = `<li data-i="${a[0]}${a[1]}">
        <img src="${shopSrc}" alt="">
        <h4>${shopTitle}</h4>
        <span class="btn-close">x</span>
        <div class="shop-num">
        <i class="res i sub">-</i><span class="res s">${shopnum}</span><i class="res i add">+</i>
        </div>
        </li>`;
        $(".cart-list ul").html(carlist);
        $(".shop-num").on("click", "i", function () {
            if ($(this).hasClass("sub")) {
                if (shopnum == 1) {
                    alert("数量最小为1");
                } else {
                    shopnum--;
                    $(".s").html(shopnum);
                }

            } else {
                shopnum++;
                $(".s").html(shopnum)
            }
        })
        // 删除商品
        $(".btn-close").on("click", function () {
            $(".cart-list ul").children("li").eq($(this).parent().index()).remove();
        })
        // 购物车结算跳转
        $(".order").on("click", function () {
            window.open("../html/car.html")
        })
    })
    

})