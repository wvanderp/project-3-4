
<?php
//deze pagina zet een pas nummer en pincode om in een true false.

require_once 'errorGen.php';

$link=mysqli_connect("localhost","root","skere","SkereDB");
// $link=mysqli_connect("localhost","root","","SkereDB");

if (!isset($_GET["pasNr"])) {
        $message = "pasnummer is not set";
        echo json_encode(array("error" => $message));
	notFound("pas nummer");
}

if (!isset($_GET["pinCode"])) {
        $message = "pincode niet gevonden";
        echo json_encode(array("error" => $message));
	notFound("pin code");
}

$pasNr = $_GET["pasNr"];
$pinCode = $_GET["pinCode"];

$result= mysqli_query($link,"SELECT pincode FROM `pas` WHERE `pas_id` = '".$pasNr."' LIMIT 1") or errorQuery(mysqli_error($link));

if (mysqli_num_rows($result) < 1) {
        $message = "No data found. mysqlirows < 1";
        echo json_encode(array("error" => $message));

	noDataFound();
}

$dbpin = mysqli_fetch_assoc($result);

if($pinCode == $dbpin["pincode"]){
	echo json_encode(true);
}else{
	echo json_encode(false);

}
?>


