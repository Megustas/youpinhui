<?php
header("Content-Type:text/json;charset=utf-8");
$json = file_get_contents("commodity.json");
$data = json_decode($json,true);
$name = $_GET["name"];
$live = $data[$name];
echo json_encode($data[$name])
?>