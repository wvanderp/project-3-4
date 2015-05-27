<?php

include("utils.php");
require_once 'errorGen.php';

$link = mysqli_connect("localhost","root","skere","SkereDB");

$token = 
$query = "SELECT `validatieToken` FROM `validatie` WHERE `validatieToken` = ".$token." LIMIT 1 ";

?>