<?php
	error_reporting(E_ALL);
	ini_set('display_errors', true);

        //$token = $_HEADER["token"];
        $link = mysqli_connect("localhost","root","skere","SkereDB");
        //$cardId = $_GET["cardId"];
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


	if(isset($_POST["amount"])){
		$amount = $_POST["amount"];
	} else {
		 $responce = array(
        	    "success" => array(),
       		    "error" => array(
               		 "code" => 30,
               		 "message" => "amount niet gevonden",
           	     )
       		 );
	echo json_encode($responce, JSON_FORCE_OBJECT);
	die();
	}

    $query = "SELECT * FROM `tokens` WHERE `token` = '".$token."' LIMIT 1";
    $resp = mysqli_query($link, $query) or die(mysqli_error($link));
    $numRow = mysqli_num_rows($resp);
    $cardIdArray = mysqli_fetch_assoc($resp);


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


	$query = "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = (SELECT `rekening_nr` FROM `pas` WHERE `pas_id` = '".$cardIdArray['pas']."') LIMIT 1"; 
	$saldo = mysqli_query($link, $query) or die(mysqli_error($link));
	$saldoArray = mysqli_fetch_assoc($saldo);

	$saldo = $saldoArray['saldo'];
	$saldo = $saldo - $amount;

	$query = "UPDATE `rekening` SET `saldo` = '".$saldo."' WHERE `rekening_nr` = (SELECT `rekening_nr` FROM `pas` WHERE `pas_id` = '".$cardIdArray['pas']."')";
    mysqli_query($link, $query) or die(mysqli_error($link));

	$responce = array(
		"success" => array(
			"code" => 1337,
			"message" => "Saldo updated",
		),
		"error" => array()
	);

	echo json_encode($responce, JSON_FORCE_OBJECT);
	die();

?>
