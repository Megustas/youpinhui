$(function(){
    $(".item-ifo").children("input").focus(function(){
        $(this).css({
          "border-color": "rgb(95, 193, 0)",
         "color": "rgb(0, 0, 0)"
        })
        if($(this).val().length == 0&& $(this).hasClass("text1")==true){
            $(this).siblings(".a").addClass("etips").html("请输入您注册的手机号/邮箱/昵称");
        }else if($(this).val().length != 0&& $(this).hasClass("text1")==true){
            $(this).siblings(".a").removeClass("etips").html("");
        }
    })
    $(".item-ifo").children("input").blur(function(){
        $(this).css({
            "border-color": "rgb(162, 162, 162)",
           "color": "rgb(0, 0, 0)"
          })
    })

    $("#button").click(function(){
        let usm = $(".text1").val();
        let paw = $(".text2").val();
        if(usm.length != 0&&paw.length!=0){
            $.get({
                url:"../api/get-form.php",
                data:{
                    sta:"1",
                    user:usm,
                    password:paw
                },
                success(data){
                    alert(data);
                   if(data == "登录成功"){
                       if($("#get_pass").prop("checked")){
                        Cookie.setItem("username", usm,7)
                     
                       }else{
                        Cookie.removeItem("username",null,-1)
                       }
                    window.location.href = "../html/index.html"
                   }
                }
            })
        }else {
            alert("请完善账号密码")
        }
    }) 
})