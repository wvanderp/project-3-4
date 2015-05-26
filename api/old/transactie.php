<?php
// geen idee waar dit over gaat.> Dit gaat over transacties tussen twee rekeningen.
// Er wordt gecheckt of je wel genoeg saldo hebt voor de transactie.
// zoja, dan wordt een UPDATE uitgevoerd op de database zodat je saldo wijzigd.

	include("utils.php");
	require_once 'errorGen.php';

	$link = mysqli_connect("localhost","root","skere","SkereDB");

	$rekening_nr = $_GET["rekening_nr"];

	$rekening_nr = mysqli_real_escape_string($link, $rekening_nr);

	$query = "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = ".$rekening_nr." LIMIT 1 ";
	$result=mysqli_query($link, $query) or die(mysqli_error($link));

	if ($opvraag > $result){
       		$message = "Not enough cash.";
		echo json_encode(array("error" => $message));

	} else {	
		echo json_encode(array("transactie voltooid"));
	  	UPDATE `saldo` SET saldo = $result
	}
?>
