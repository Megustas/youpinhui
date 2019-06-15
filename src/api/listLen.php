<?php
// header("Content-Type:text/json;charset=utf-8");
$json  = file_get_contents("list.json");
$data  = json_decode($json,true);
$len   = ceil(count($data)/9);
echo $len;
?>