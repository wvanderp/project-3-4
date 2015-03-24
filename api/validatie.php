<?php
include("check.php");
//deze pagina zet een bankrekening om in een saldo

//zeker weten dat br is ingevult
if(!isset($_GET["br"])){
	die("no br found");
}

//
if(!isset($_GET["pincode"])){
	die("no pincode found");
}

if (!is_numeric($_GET["pincode"])) {
	die("pincode is not a number");
}

$link=mysqli_connect("localhost","root","skere","SkereDB");

$br=$_GET["br"];
$pincode=$_GET["pincode"];

$br = mysqli_real_escape_string($link, $br);
$pincode = mysqli_real_escape_string($link, $pincode);

$result = mysqli_query($link, "SELECT 'Pas_pincode' FROM 'Pas' WHERE `Pas_pincode` = ".$pincode." LIMIT 1 ") or die(mysqli_error($link));

if (mysqli_num_rows($result) == 0) {
	die("no combo found");
}

if ($pincode==$dbpincode){
echo "goed paswoord!";
} else {
echo "foute pin!";
}

$result=mysqli_query($link,"SELECT `Rekening_saldo` FROM `Rekening` WHERE `Rekening_nr` = ".$br." LIMIT 1 ") or die(mysqli_error($link));
$temp=mysqli_fetch_assoc($result);
$saldo = $temp["Rekening_saldo"];
//var_dump($result);
//var_dump($temp);

echo $saldo;

?>

