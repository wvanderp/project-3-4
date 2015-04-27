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
	// $link=mysqli_connect("localhost","root","","SkereDB") or die();

	$rekening_nr = $_GET["rekening_nr"];
	$amount = $_GET["amount"];

	$rekening_nr = trim(mysqli_real_escape_string($link, $rekening_nr));
	$amount = trim(mysqli_real_escape_string($link, $amount));

	$result = mysqli_query($link, "SELECT saldo FROM `rekening` WHERE `rekening_nr` = '".$rekening_nr."' LIMIT 1 ") or die(mysqli_error($link));
	//var_dump("SELECT saldo FROM `rekening` WHERE `rekening_nr` = '".$rekening_nr."' LIMIT 1 ");
	echo $rekening_nr;
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
		} else {
			$newsaldo = $saldo - $amount;
			$query = mysqli_query($link, "UPDATE `rekening` SET `saldo` ='".$newsaldo."' WHERE `rekening_nr` = '".$rekening_nr."');
			echo json_encode(array("done"));
		}
?>

