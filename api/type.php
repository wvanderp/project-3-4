
<?php
//deze pagina zet een bankrekening om in een type

$link=mysqli_connect("localhost","root","skere","SkereDB");

$br=$_GET["br"];

$result= mysqli_query($link,"SELECT type FROM `rekening` WHERE `rekening_nr` =".$br." LIMIT 1") or die(mysqli_error($link));
echo $result;
//$temp = mysqli_fetch_assoc($result);
//$type = $temp["rekening_type"];
//var_dump($result);
//var_dump($temp);

echo $type;

?>


