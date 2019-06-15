<?php
// header("Content-Type:text/json;charset=utf-8");
$json  = file_get_contents("list.json");
$data  = json_decode($json,true);
$index = $_GET["page"];
$arr   = array();
$k     = -1;
foreach($data as $key=>$value){
    if($key%9==0){
    $g = array();
    $k++;
    array_push($arr,$g);
    }
    array_push($arr[$k],$value);
}
echo json_encode($arr[$index]);
?>