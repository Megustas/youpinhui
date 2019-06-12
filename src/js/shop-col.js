$(function(){
    $.get({
        url:"../api/commodity.php",
        data:{name:"shop_col_index"},
        success(data){
            data.forEach(function(ele,i){
            let shop_list = `<li>
            <div class="shop_box">
                <a href="">
                <div class="shop_img_box">
                    <i class="i_tv_icon"></i>
                    <img src="${ele.src}" alt="" class="shop_loading">
                </div>
                <p class="shop_text">
                    <em class="shop_tit">${ele.box_tit}</em>
                </p>
                <p class="shop_subtit">${ele.shop_subtit}</p>
                <div class="shop_price_div">
                    <span class="fl shop_price_new"><i>¥</i>${ele.new}</span>
                    <span class="fl shop_price_old"><em class="line_price">${ele.old}</em></span>
                    <span class="fr purchased"><i>${ele.purchased}</i>已购买</span>
                </div>
            </a></div>
        </li>`;
                $(".shop_col > ul").append(shop_list);
                if(!ele["live"]){
                    $(".shop_img_box").children(".i_tv_icon").eq(i).css({background:"none"})
                }
                if(!ele["shop_subtit"]){
                   $(".shop_subtit").eq(i).empty()
                }
                if(!ele["old"]){
                    $(".shop_price_old").children(".line_price").eq(i).empty()
                }

            })
        }
    })
})