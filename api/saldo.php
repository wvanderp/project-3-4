<?php
//deze pagina zet een bankrekening om in een saldo
$link=mysqli_connect("localhost","root","skere","SkereDB");

$br=$_GET["br"];

if (preg_match("/x^\d+$/mg", $br)){
	die("rekeningnummer kan alleen cijfers bevatten");
}

$result=mysqli_query($link,"SELECT `Rekening_saldo` FROM `Rekening` WHERE `Rekening_nr` = ".$br." LIMIT 1 ") or die(mysqli_error($link));
$temp=mysqli_fetch_assoc($result);
$saldo = $temp["Rekening_saldo"];
//var_dump($result);
//var_dump($temp);

echo $saldo;

?>
