<?php
$link=mysqli_connect("localhost","root","skere","SkereDB");
include("utils.php");
$pas_id=$_GET["pas_nr"];
$result= mysqli_query($link, "SELECT rekening_nr FROM `pas` WHERE `pas_id` = ".$pas_id." LIMIT 1") or die(mysqli_error($link));
echo $result;

?>
