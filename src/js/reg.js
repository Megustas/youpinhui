$(function(){
    function phone(present){
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(present.val().length == 0){
            return 1
        }else if(!reg.test(present.val())){
            return false
        }else if(reg.test(present.val())){
            return 2
        }
    }
    function password(present){
        let reg = /[a-zA-Z]\w{5,19}$/;
        if(present.val().length == 0){
            return 1
        }else if(!reg.test(present.val())){
            return false
        }else if(reg.test(present.val())){
            return 2
        }
    }
    function createCode(){ 
        code = '';//首先默认code为空字符串 
        var codeLength = 4;//设置长度，这里看需求，我这里设置了4 
        var codeV = $("div"); 
        //设置随机字符 
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'); 
        for(var i = 0; i < codeLength; i++){ //循环codeLength 我设置的4就是循环4次   
           var index = Math.floor(Math.random()*36); //设置随机数范围,这设置为0 ~ 36  
           code += random[index]; //字符串拼接 将每次随机的字符 进行拼接 
      } 
      $(".yzmdiv").html(code);
      } 
      //页面开始加载验证码 
      createCode(); 
      $(".code_refresh").click(function(){
        createCode();  
      })

      let a,b,c,d;
    $(".item-ifo").children("input").focus(function(){
        $(this).css("border-color","rgb(95,193,0)");
        if($(this).hasClass("text1")){
        $(this).siblings(".a").addClass("ztips").removeClass("etips").html("请输入常用手机号，避免忘记");
        }
        if($(this).hasClass("text2")){
            $(this).siblings(".a").addClass("ztips").removeClass("etips").html("6-20位,字母、符号或者数字的组合")
            }
        
    })
    $(".item-ifo").children("input").blur(function(){
        var present = $(this);
        $(this).css("border-color","#a2a2a2");
        if($(this).hasClass("text1")){
            if(phone(present) == 1){   
                $(this).siblings(".a").addClass("ztips").removeClass("etips").html("请输入手机号码")
                a=false
            }else if(phone(present) == false){
                $(this).siblings(".a").addClass("etips").removeClass("ztips").html("号码格式错误")
                a=false
            }else if(phone(present) == 2){
                $(this).siblings(".a").addClass("ztips").removeClass("etips").html("格式正确")
                a = true

            }
        }
        if($(this).hasClass("text2")){
            if(password(present) == 1){
                $(this).siblings(".a").addClass("etips").removeClass("ztips").html("请输入密码")
                b=false
            }else if(password(present) == false){
                $(this).siblings(".a").addClass("etips").removeClass("ztips").html("密码长度应是6-20位字符，请重新输入")
                b=false
            }else if(password(present) == 2){
                $(this).siblings(".a").addClass("ztips").removeClass("etips").html("格式正确")
                b=true
            }
        }
        if($(this).hasClass("text3")){
            if($(this).val().length == 0){
            $(this).siblings(".a").addClass("etips").removeClass("ztips").html("请再次输入密码")
            c=false
        }else if($(".text2").val() != $(this).val()){
            $(this).siblings(".a").addClass("etips").removeClass("ztips").html("密码不一致")
            c=false
        }else{
            $(this).siblings(".a").addClass("ztips").removeClass("etips").html("密码一致")
            c=true
            }
        }
        if($(this).hasClass("text8")){
            if($(this).val() == $(".yzmdiv").html()){
                $(this).siblings(".a").addClass("ztips").removeClass("etips").html("验证码正确")
                d=true
            }else{
                $(this).siblings(".a").addClass("etips").removeClass("ztips").html("验证码不正确，请重新输入")
                d=false
            }
            }
        })
        
        
        if($("#checkx1").prop("checked")){
            $(".registsubmit").click(function(){
                let usm = $(".text1").val();
                let paw = $(".text2").val();
                if(a==true&&b==true&&c==true&&d==true){
                    $.get({
                        url:"../api/get-form.php",
                        data:{
                            user:usm,
                            password:paw
                        },
                        success(data){
                            console.log(data); 
                        }
                    })
                }else if(!$("#checkx1").prop("checked")) {
                    alert("请勾选我已阅读并同意选项")
                }else{
                    alert("格式错误请检查")
                }
            }) 
        }

})