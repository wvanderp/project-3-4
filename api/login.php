<?php
include("utils.php");
require_once 'errorGen.php';

$link = mysqli_connect("localhost","root","skere","SkereDB");

$pin = $_GET["pin"];

$pasnr = $_GET["pasnr"];

$query = "SELECT `pas_id` FROM `pas` WHERE `pas_id` = ".$pasnr." LIMIT 1";
mysqli_query($link, $query);

$query2 = "SELECT `pincode`FROM `pas`WHERE `pincode` = ".$pin." LIMIT 1";

if ($pasnr == $query && $pin == $query2){
	$token = md5(time());
	$responce = array(
		"sucsess" => array("token" => $token ),
		"error" => array()
	)
}else {
	$error = 201;
}


$json = json_encode($responce);
?>



