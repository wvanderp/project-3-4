<?php
include("check.php");
//deze pagina zet een bankrekening om in een saldo
$link=mysqli_connect("hro.cwms.cc","root","skere","SkereDB");

$br=$_GET["br"];
$pincode=$_GET["pincode"];

$dbpincode = mysqli_queri($link, "SELECT 'Pas_pincode' FROM 'Pas' WHERE `Pas_pincode` = ".$pincode." LIMIT 1 ") or die(mysqli_error($link));

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

