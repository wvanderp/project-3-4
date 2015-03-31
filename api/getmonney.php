<?php
	include("utils.php");
	//deze pagina zet pincode + rekening nummer om in een validatie token.

	//zeker weten dat rekening_nr is ingevult
	if(!isset($_GET["rekening_nr"])){
		die("no rekening_nr found");
	}

	//check for a amount
	if(!isset($_GET["amount"])){
		die("no amount found");
	}

	if (!is_numeric($_GET["amount"])) {
		die("amount is not a number");
	}

	$link=mysqli_connect("localhost","root","skere","SkereDB");

	$rekening_nr = $_GET["br"];
	$amount = $_GET["amount"];

	$br = mysqli_real_escape_string($link, $rekening_nr);
	$amount = mysqli_real_escape_string($link, $amount);

	$result = mysqli_query($link, "SELECT saldo FROM 'rekening' WHERE `rekening_nr` = ".$br." LIMIT 1 ") or die(mysqli_error($link));

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
