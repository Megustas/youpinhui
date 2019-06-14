<?php
$usm = $_GET["user"];
$paw = $_GET["password"];
$sta = $_GET["sta"];
// $paw = $_GET["password"];
$json_string = file_get_contents('get-form.json');
$data = json_decode( $json_string, true );//第二个参数保证将jSON字符串解码成数组
//一个用来写入JSON文件的关系数组
if($sta==0){
    for($i = 0;$i<count($data);$i++){
        if($usm == $data[$i]["name"]){
            echo "用户名已存在，请重新输入";
            break;
        }else if($i == (count($data)-1)&&$usm != $data[$i]["name"]){
            $a = Array(
                "name"=>$usm,
                "paw" =>$paw
            );
            array_push( $data,$a );
            $data_str = json_encode( $data );//将PHP变量编码成JSON字符串
            file_put_contents( 'get-form.json', $data_str );
            echo "注册成功";
            break;
        }
    }
}else if($sta == 1){
    for($i = 0;$i<count($data);$i++){
        if($usm == $data[$i]["name"]&&$paw == $data[$i]["paw"]){
            echo "登录成功";
            break;
        }else if($usm == $data[$i]["name"]&&$paw != $data[$i]["paw"]||$usm != $data[$i]["name"]&&$paw == $data[$i]["paw"]){
            echo "用户名或者密码错误";
            break;
        }else if(($usm != $data[$i]["name"]) && ($paw != $data[$i]["paw"]) && $i==(count($data)-1)){
            echo "用户不存在";
        }
    }
}

?>