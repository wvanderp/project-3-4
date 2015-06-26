<?php
	error_reporting(E_ALL);
	ini_set('display_errors', true);

	$headers = apache_request_headers();

	if(isset($headers["token"])){
                $token = $headers["token"];
        } else {
                 $responce = array(
                    "success" => array(),
                    "error" => array(
                         "code" => 3,
                         "message" => "auth token niet ontvangen",
                     )
                 );
        echo json_encode($responce, JSON_FORCE_OBJECT);
        die();
        }


	$link = mysqli_connect("localhost","root","skere","SkereDB");

	$query = "SELECT * FROM `tokens` WHERE `token` = '".$token."' LIMIT 1";
	$resp = mysqli_query($link, $query) or die("1 ".mysqli_error($link));
	
	$numRow = mysqli_num_rows($resp);

	if($numRow == 0) {
		$responce = array(
			"success" => array(),
			"error" => array(
				"code" => 4,
				"message" => "auth token niet in db",
			)
		);
		echo json_encode($responce, JSON_FORCE_OBJECT);
		die();
	}

	$cardDbArray = mysqli_fetch_assoc($resp);
	$cardId = $cardDbArray["pas"];

	$query = "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = (SELECT rekening_nr FROM pas WHERE pas_id= '".$cardId."') LIMIT 1"; 
	$temp = mysqli_query($link, $query) or die("2 ".mysqli_error($link));
	$balance = mysqli_fetch_array($temp);
	$balance = $balance[0];

	$responce = array(
		"success" => array("balance" => $balance),
		"error" => array()
	);
	
	echo json_encode($responce, JSON_FORCE_OBJECT);

?>
