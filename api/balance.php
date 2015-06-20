<?php
	error_reporting(E_ALL);
	ini_set('display_errors', true);

	//$token = $_HEADER["token"];
	$token = $_GET["token"];
	$link = mysqli_connect("localhost","root","skere","SkereDB");

	$query = "SELECT `pas` FROM `tokens` WHERE `token` = '".$token."' LIMIT 1"; 
	$cardId = mysqli_query($link, $query) or die(mysqli_error($link));

	$query = "SELECT * FROM `tokens` WHERE `token` = '".$token."' LIMIT 1";
	$temp = mysqli_query($link, $query) or die(mysqli_error($link));
	$resp = mysqli_fetch_accoc($temp);
	$numRow = mysqli_num_rows($resp);
	// mysql object omzetten -> mysqli_fetch_accoc()


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

	$query = "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = (SELECT rekening_nr FROM pas WHERE pas_id= '".$cardId."' LIMIT 1"; 
	$temp = mysqli_query($link, $query) or die(mysqli_error($link));
	$balance = mysqli_fetch_array($temp);
	$balance = $balance[0];

	if ($balance[0]!=null){
		$responce = array(
			"success" => array("balance" => $balance),
			"error" => array()
		);
	} else {
		$responce = array(
			"success" => array(),
			"error" => array(
				"code" => 201,
				"message" => "fout 201 = ???",
			)
		);
	}

?>
