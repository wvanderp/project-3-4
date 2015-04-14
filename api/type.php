
<?php
//deze pagina zet een bankrekening om in een type

require_once 'errorGen.php';

$link=mysqli_connect("localhost","root","skere","SkereDB");

if (!isset($_GET["br"])) {
	notFound("bankrekening");
}

$br=$_GET["br"];

$result= mysqli_query($link,"SELECT type FROM `rekening` WHERE `rekening_nr` =".$br." LIMIT 1") or die(mysqli_error($link));
echo $result;
$temp = mysqli_fetch_assoc($result);
$type = $temp["rekening_type"];

$result = mysqli_query($link,"SELECT `type` FROM `rekening` WHERE `rekening_nr` =".$br." LIMIT 1") or die(mysqli_error($link));

$temp = mysqli_fetch_assoc($result);
$type = $temp["rekening_type"];
?>


