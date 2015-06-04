<?php
$link = mysqli_connect("localhost","root","skere","SkereDB");

$token = 132;
$query = "SELECT `validatieToken` FROM `validatie` WHERE `validatieToken` = ".$token." LIMIT 1 ";

?>
