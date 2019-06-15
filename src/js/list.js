$(function () {
    $.get({
        url:"../api/listlen.php",
        success(len){
            for(let or = 1;or <= len; or++){
                let order = ` <a class="p_num p_old">${or}</a>`
                $(".pagelist").append(order);
            }
            $(".pagelist").children("a").eq(0).addClass("p_now").removeClass("p_old");
            let a_arr =  $(".pagelist").children("a");
            // 上一页按钮
            $(".pre_page_hui").on("click",function(){
                a_arr.each(function(i,ele){
                    if($(this).hasClass("p_now")&&$(this).index()!=0){
                        // $(this).addClass("p_old").removeClass("p_now");
                        $(this).prev().addClass("p_now").removeClass("p_old").siblings().addClass("p_old").removeClass("p_now");
                        return false;
                    }
                    
                })
                a_arr.each(function(i){
                    if(a_arr.eq(i).hasClass("p_now")){
                    let prveindex = $(this).index();
                    g(prveindex)
                }
                })
               
            });
            // 上一页结束

            // 下一页开始
            $(".next_page").on("click",function(){
                a_arr.each(function(i,ele){
                    if($(this).hasClass("p_now")&&$(this).index()!=a_arr.length-1){
                        $(this).next().addClass("p_now").removeClass("p_old").siblings().addClass("p_old").removeClass("p_now");
                         return false;
                    }
                })
                a_arr.each(function(i){
                    if(a_arr.eq(i).hasClass("p_now")){
                    let nextindex = $(this).index();                   
                    g(nextindex);
                }
                })
                
                
            });
            // 下一页结束

            // 首页和尾页按钮开始
            $(".last_page").on("click",function(){
                if($(this).hasClass("t")){
                    $(this).addClass("p_now").removeClass("p_old");
                    $(".w").addClass("p_old").removeClass("p_now");
                    $(".pagelist >a").eq(0).addClass("p_now").removeClass("p_old");
                    $(".pagelist > a").first().nextAll().removeClass("p_now").addClass("p_old");
                    g(a_arr.first().index());
                }
                if($(this).hasClass("w")){
                    $(this).addClass("p_now").removeClass("p_old");
                    $(".t").addClass("p_old").removeClass("p_now");                   
                    $(".pagelist > a").eq(a_arr.length-1).addClass("p_now").removeClass("p_old");
                    $(".pagelist > a").last().prevAll().removeClass("p_now").addClass("p_old");
                    g(a_arr.length-1)
                }
                })
                // 首尾按钮结束

                // 分页按钮开始
                $(".pagelist").on("click","a",function(){
                    $(this).addClass("p_now").removeClass("p_old").siblings().addClass("p_old").removeClass("p_now");
                    let listIndex = $(this).index();
                    console.log(listIndex);
                    
                    g(listIndex);
                })
        }
    })
    function g(p) {
        $.get({
            url: "../api/list.php",
            data: {
                page: p,
            },
            success(shop) {
                let resShop = JSON.parse(shop);               
                if($(".smPruArea > div").length != 0){
                    resShop.forEach(function(ele,i){
                        $(".goodsphoto").eq(i).children("a").attr("href",`../html/goods.html?${p}=${i}`);
                        $(".goodsphoto").eq(i).children("a").children("img").attr("src",`${ele.src}`);
                        $(".goodsphoto").eq(i).attr("href",`../html/goods.html?${p}=${i}`);
                        $(".goods-tittle").eq(i).html(`${ele.list_tit}`);
                        $(".review").eq(i).children().html(`${ele.purchased}`);
                        $(".now-price").eq(i).text(`${ele.price}`)
                    })
                }else{
                    let con = resShop.map(function (ele, i) {
                  
                        return `<div class="pruwrap">
                        <dl class="pruwrapdl mgl">
                            <dt>
                                <div class="goodsphoto">
                                        <a href="../html/goods.html?${p}=${i}" target="_blank" >
                                            <img src="${ele.src}">
                                        </a>
                                </div>
                            </dt>
                            <dd class="goods-tittle"><a href="../html/goods.html?${p}=${i}" target="_blank">${ele.list_tit}</a>
                            </dd>
                            <dd class="goods-picmass pdl16">
                                    <div class="l price">
                                    <div class="fl now-price">
                                            <span>￥</span>${ele.price}</div>
                                             </div>
                                    <div class="r review">
                                        评论<a href="javascript:void(0);" target="_blank">${ele.purchased}</a>条
                                    </div>
                                </dd>
                        </dl>
                    </div>`
                    }).join("");
                    $(".smPruArea").html(con);
                }
            }
        })
    }
g(0);  
})