
<?php
//deze pagina zet een bankrekening om in een type

require_once 'errorGen.php';

$link=mysqli_connect("localhost","root","skere","SkereDB");

if (!isset($_GET["br"])) {
        $message = "rekening not legit\not found";
        echo json_encode(array("error" => $message));
	notFound("bankrekening");
}

$br=$_GET["br"];

$result= mysqli_query($link,"SELECT type FROM `rekening` WHERE `rekening_nr` =".$br." LIMIT 1") or die(mysqli_error($link));
echo json_encode(array($result));
$temp = mysqli_fetch_assoc($result);
$type = $temp["rekening_type"];

?>


