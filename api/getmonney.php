<?php
	// deze end point haal geld van een rekening af.
	// het heeft daarvoor een rekenin nummer en een hoeveelheid nodig
	
	include("utils.php");
	require_once 'errorGen.php';

	//zeker weten dat rekening_nr is ingevult
	if(!isset($_GET["rekening_nr"])){
        $message = "rekening_nr not found in url";
        echo json_encode(array("error" => $message));
		notFound("rekening nummer");
	}

	//check for a amount
	if(!isset($_GET["amount"])){
        $message = "amount not found";
        echo json_encode(array("error" => $message));
		notFound("hoeveelheid");
	}

	if (!is_numeric($_GET["amount"])) {
        $message = "amount not a number";
        echo json_encode(array("error" => $message));
		wrongType("ammount", "decimal number");
	}

	$link=mysqli_connect("localhost","root","skere","SkereDB") or die();

	$rekening_nr = $_GET["br"];
	$amount = $_GET["amount"];

	$br = trim(mysqli_real_escape_string($link, $rekening_nr));
	$amount = trim(mysqli_real_escape_string($link, $amount));

	$result = mysqli_query($link, "SELECT saldo FROM `rekening` WHERE `rekening_nr` = '".$br."' LIMIT 1 ") or die(mysqli_error($link));

	if (mysqli_num_rows($result) == 0) {
        $message = "rekening not in db";
        echo json_encode(array("error" => $message));
		die();

	}else{
		$temp = mysqli_fetch_array($result);
		$saldo = $temp[0];
		if ($saldo < $amount) {
        	$message = "not enough cash";
	        echo json_encode(array("error" => $message));
			die();
		}
		$saldo = $saldo - $amount;
		$query = "UPDATE `SkereDB`.`rekening` SET `saldo`='".$saldo."' WHERE `rekening_nr`='".$rekening_nr."';";
		echo json_encode(array("done"));
	}
?>

