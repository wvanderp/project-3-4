<?php
	//  dit endpoint zet een rekening nummer om is een saldo.
	include("utils.php");
	require_once 'errorGen.php';

	//zeker weten dat rekening_nr is ingevult
	if(!isset($_GET["rekening_nr"])){
        $message = "rekening not found in the url";
        echo json_encode(array("error" => $message));
		die("no rekening_nr found");
	}

	if (!is_numeric($_GET["rekening_nr"])) {
		$message = "rekening not legit";
                echo json_encode(array("error" => $message));
		die("rekening nummer is niet geldig");
	}

	$link=mysqli_connect("localhost","root","skere","SkereDB");

	$rekening_nr = $_GET["rekening_nr"];

	$rekening_nr = mysqli_real_escape_string($link, $rekening_nr);

	$result = mysqli_query($link, "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = ".$rekening_nr." LIMIT 1 ") or die(mysqli_error($link));

	if (mysqli_num_rows($result) == 0) {
                $message = "rekening not found in the url";
                echo json_encode(array("error" => $message));
		die("rekening_nr niet bekent");
	}else{
		$temp = mysqli_fetch_array($result);
                echo json_encode($temp[0]);
	}
?>

