<?php
header("Content-Type:text/json;charset=utf-8");
$json = file_get_contents("kindbot.json");
echo $json;
?>