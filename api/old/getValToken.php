<?php
	//deze pagina zet pincode + rekening nummer om in een validatie token.
	include("utils.php");
	require_once 'errorGen.php';

	//zeker weten dat rekening_nr is ingevult
	if(!isset($_GET["rekening_nr"])){
        	$message = "rekening not legit\not found";
        	echo json_encode(array("error" => $message));
		notFound("rekening nummer");
	}

	//check for a pincode
	if(!isset($_GET["pincode"])){
                $message = "pincode not found";
                echo json_encode(array("error" => $message));
		notFound("pincode not found");
	}

	if (!is_numeric($_GET["pincode"])) {
                $message = "pincode is not a number";
                echo json_encode(array("error" => $message));
		die("pincode is not a number");
	}

	$link=mysqli_connect("localhost","root","skere","SkereDB");

	$rekening_nr = $_GET["br"];
	$pincode = $_GET["pincode"];

	$br = mysqli_real_escape_string($link, $rekening_nr);
	$pincode = mysqli_real_escape_string($link, $pincode);

	$result = mysqli_query($link, "SELECT * FROM 'Pas' WHERE `pincode` = ".$pincode." && `rekening_nr` = ".$rekening_nr." LIMIT 1 ") or die(mysqli_error($link));

	if (mysqli_num_rows($result) == 0) {
                $message = "no combo found";
                echo json_encode(array("error" => $message));
		die("no combo found");
	}else{
		$time = time();
		$valToken = md5($time);
		$query = "INSERT INTO `SkereDB`.`validatie` (`validatie_id`, `validatieToken`, `pasnr`, `rekeningNr`, `date`) VALUES (NUll, $valToken, $pasnr, $rekening_nr, $time) ";
		mysqli_query($link, $query) or die(mysqli_error($link));

		echo json_encode(array("data" => $valToken));
	}
?>

