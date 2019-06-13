<?php
$liarr = $_GET["arr"];
$index = $_GET["name"];
$arr = json_decode($liarr);
echo $arr[$index]
?>