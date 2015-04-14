<?php
	// deze end point haal geld van een rekening af.
	// het heeft daarvoor een rekenin nummer en een hoeveelheid nodig
	
	include("utils.php");
	require_once 'errorGen.php';

	//zeker weten dat rekening_nr is ingevult
	if(!isset($_GET["rekening_nr"])){
		notFound("rekening nummer");
	}

	//check for a amount
	if(!isset($_GET["amount"])){
		notFound("hoeveelheid");
	}

	if (!is_numeric($_GET["amount"])) {
		wrongType("ammount", "decimal number");
	}

	$link=mysqli_connect("localhost","root","skere","SkereDB") or die();

	$rekening_nr = $_GET["br"];
	$amount = $_GET["amount"];

	$br = mysqli_real_escape_string($link, $rekening_nr);
	$amount = mysqli_real_escape_string($link, $amount);

	$result = mysqli_query($link, "SELECT saldo FROM `rekening` WHERE `rekening_nr` = ".$br." LIMIT 1 ") or die(mysqli_error($link));

	if (mysqli_num_rows($result) == 0) {
		die("rekening nummer is niet bekent");
	}else{
		$temp = mysqli_fetch_array($result);
		$saldo = $temp[0];
		if ($saldo < $amount) {
			die("niet genoeg saldo");
		}
		$saldo = $saldo - $amount;
		$query = "UPDATE `SkereDB`.`rekening` SET `saldo`='".$saldo."' WHERE `rekening_nr`='"..$rekening_nr"';";
		echo "done";
	}
?>

