<?php
	include("utils.php");
	//deze pagina zet pincode + rekening nummer om in een validatie token.

	//zeker weten dat rekening_nr is ingevult
	if(!isset($_GET["pasNr"])){
		die("no rekening_nr found");
	}

	if (!is_numeric($_GET["pasNr"])) {
		die("pas nummer is not a number");
	}

	$link=mysqli_connect("localhost","root","skere","SkereDB");

	$pasNr = $_GET["pasNr"];

	$pasNr = mysqli_real_escape_string($link, $pasNr);

	$result = mysqli_query($link, "SELECT 'rekening_nr' FROM 'Pas' WHERE `pas_id` = ".$pasnr." LIMIT 1 ") or die(mysqli_error($link));

	if (mysqli_num_rows($result) == 0) {
		die("pas nr niet bekent");
	}else{
		$temp = mysqli_fetch_assoc($result);

		echo $temp["rekening_nr"];
	}
?>

