<?php
	error_reporting(E_ALL);
	ini_set('display_errors', true);

        //$token = $_HEADER["token"];
        $link = mysqli_connect("localhost","root","skere","SkereDB");
        //$cardId = $_GET["cardId"];
        //$token = $_GET["token"];
        //$amount = $_GET["amount"];
	$token = "005971f6a02808c02c7d02fb4dc87903";
        $amount = 1;


	$query = "SELECT `pas` FROM `tokens` WHERE `token` = '".$token."' LIMIT 1";
        $cardId = mysqli_query($link, $query) or die(mysqli_error($link));
	$cardIdarray = mysqli_fetch_assoc($cardId);
    $query = "SELECT * FROM `tokens` WHERE `token` = '".$token."' LIMIT 1";
    $resp = mysqli_query($link, $query) or die(mysqli_error($link));
    $numRow = mysqli_num_rows($resp);

    //get pas nummer van db

    if($numRow == 0) {
                $responce = array(
                        "success" => array(),
                        "error" => array(
                                "code" => 4,
                                "message" => "auth token niet in db",
                        )
                );

		echo json_encode($responce);
                die();
        }

	$query = "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = (SELECT `rekening_nr` FROM `pas` WHERE `pas_id` = '".$cardIdarray['pas']."') LIMIT 1";
	$balance = mysqli_query($link, $query) or die(mysqli_error($link));
	$balanceArray = mysqli_fetch_assoc($balance);
	$saldo = $balanceArray['saldo']-$amount;
	// mysql object omzetten -> mysqli_fetch_accoc()



	$query = "UPDATE `rekening` SET `saldo` = '".$saldo."' WHERE `rekening_nr` = (SELECT `rekening_nr` FROM `pas` WHERE `pas_id` = '".$cardIdarray['pas']."')";
    mysqli_query($link, $query) or die(mysqli_error($link));

	$query = "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = (SELECT `rekening_nr` FROM `pas` WHERE `pas_id` = '".$cardIdarray['pas']."') LIMIT 1";
    $balance = mysqli_query($link, $query) or die(mysqli_error($link));

    //wat wil je berijken met deze if statment
    //je wil namelijk altijd na het updateten een responce terug geven
	if($saldo==$balanceArray['saldo']){
		$responce = array(
       	                "success" => array(
				"code" => 1337,
       	                 	"message" => "Saldo updated",
						),
       	                "error" => array()
	        );

		echo json_encode($responce);
		die();
		//de code in deze else moet naar het stuk waar de code word opgevraagt
	} else {
		$responce = array(
			"success" => array(),
			"error" => array(
				"code" => 201,
				"message" => "saldo niet bekend",
			)
		);
		echo json_encode($responce);
		die();
	}

?>
