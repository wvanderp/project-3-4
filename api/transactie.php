<?php
include("utils.php");

$link = mysqli_connect("localhost","root","skere","SkereDB");

$rekening_nr = $_GET["rekening_nr"];

$rekening_nr = mysqli_real_escape_string($link, $rekening_nr);

$query = "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = ".$rekening_nr." LIMIT 1 ";
echo $query;
$result=mysqli_query($link, $query) or die(mysqli_error($link));

if ($opvraag > $result){
  echo "je heb nie genoeg geld.";
}

?>
