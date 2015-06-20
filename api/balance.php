<?php
	error_reporting(E_ALL);
	ini_set('display_errors', true);

	//$token = $_HEADER["token"];
	$token = $_GET["token"];
	$link = mysqli_connect("localhost","root","skere","SkereDB");
	$pas = $_GET["pas"];

	$query = "SELECT * FROM `tokens` WHERE `token` = '".$token."' LIMIT 1";
	$resp = mysqli_query($link, $query) or die(mysqli_error($link));
	$numRow = mysqli_num_rows($resp);


	if($numRow == 0) {
		$responce = array(
			"success" => array(),
			"error" => array(
				"code" => 4,
				"message" => "auth token niet in db",
			)
		);
		echo($responce);
		die();
	}

	$query = "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = (SELECT rekening_nr FROM pas WHERE pas_id= '".$pas."' LIMIT 1"; 
	$balance = mysqli_query($link, $query) or die(mysqli_error($link));

	if ($balance!=null){
		$responce = array(
			"success" => array("balance" => $balance),
			"error" => array()
		);
	}
?>
